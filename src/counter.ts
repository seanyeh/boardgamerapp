import * as m from 'mithril';
import { Page, State } from "./page";

import { Assets } from "./assets";


let _ID = 0;

export class Counter extends Page {

    COUNT_DEFAULT: number = 0;

    count: number = 0;

    players: PlayerCounter[];

    notifications: any[];



    constructor(){
        super();

        this.notifications = [];

        this.setStates([
            new State("Multiplayer", this.multiView.bind(this)),
            new State("Single", this.singleView.bind(this)),
        ]);

        this.players = [
            new PlayerCounter("Bob", 2),
            new PlayerCounter("Job", 3),
        ];
    }


    reset() {
        if (confirm("Are you sure?")) {
            this.count = this.COUNT_DEFAULT;
        }
    }


    addPoints(index: number, points: number) {
        this.players[index].addPoints(points);

        this.addNotification(points);
    }

    addNotification(n: number) {
        this.notifications.push(new Notification(n));

        // Delete first notification after 2 seconds
        window.setTimeout(() => {
            this.notifications.shift();
        }, 2000);
    }

    /*
     * Events
     */
    blurOnEnter(event: any) {
        if (event.keyCode === 13) {
            event.target.blur();
        }
    }

    genOnClick(f: any) {

        return {
            ontouchstart: (e: any) => {
                f.bind(this)();
                e.preventDefault();
            },
            onclick: (e: any) => {
                f.bind(this)();
            }
        }
    }

    resetAll() {
        if (confirm("Reset all players scores?")) {
            this.players.forEach( (p) => {
                p.setPoints(this.COUNT_DEFAULT);
            });
        }
    }

    /*
     * View Components
     */

    /*
     * Views
     */

    view() {
        return [
            // Notifications
            m("div.over",
                this.notifications.map( (n: Notification) => {
                    return m("div", {id: "notification" + n.getID()}, n.toString());
                })
            ),

            super.view()
        ];

    }

    singleView() {
        return [
            m(".counter.block-group", [
                m("div.b1",
                    m.trust(Assets.svg("plus"))
                ),
                m("span.count.b2", this.count),
                m("a.inc.b1", {onclick: function() { this.count++; }}, "+"),

                m("a.reset.b0", {onclick: function() { this.reset(); }}, "Reset")
            ])
        ]
    }

    multiView() {

        return m("div.multiview", [

            // Existing players
            this.players.map( (p, index) => {
                return [

                    // First row
                    m("div.player-row", [
                        m("div.remove", {onclick: () => { this.removePlayer(index); }},
                            m.trust(Assets.svg("remove")),
                        ),
                        m("input[type='text'].name", {
                            value: p.getName(),
                            onkeypress: this.blurOnEnter,
                            oninput: (event: any) => { p.setName(event.target.value); }
                        }),

                        m("div.minus.unit.right", this.genOnClick(() => { this.addPoints(index, -1); }),
                            m.trust(Assets.svg("minus-circle"))
                        ),

                        m("input[type='number'].points.unit2", {
                            value: p.getPoints(),
                            onkeypress: this.blurOnEnter,
                            oninput: (event: any) => { p.setPoints(event.target.value); }
                        }),

                        m("div.plus.unit", this.genOnClick(() => { this.addPoints(index, 1); }),
                            m.trust(Assets.svg("plus-circle"))
                        ),

                    ]),

                    // Second row
                    m("div.player-row.row2", [
                        m("div.minus5.button.unit2.right", this.genOnClick(() => { this.addPoints(index, -5); }), [
                            m.trust(Assets.svg("minus")),
                            m("span", "5")
                        ]),

                        m("div.plus5.button.unit2", this.genOnClick(() => { this.addPoints(index, 5); }), [
                            m.trust(Assets.svg("plus")),
                            m("span", "5")
                        ]),
                    ])
                ];
            }),

            // Last row
            m("div.player-row", [
                m("div.add-player", {onclick: () => { this.addPlayerFriendly(); }}, [
                    m.trust(Assets.svg("plus")),
                    m("span", "Add player")
                ]),

                m("div.reset-all.button.unit4.right", {onclick: this.resetAll.bind(this)}, [
                    m.trust(Assets.svg("reset")),
                    m("span", "Reset all")
                ]),
            ])
        ]);

    }

    addPlayerFriendly() {
        let name = window.prompt("Enter name:");
        if (name != null) {
            this.addPlayer(name);
        }
    }

    addPlayer(name: string) {
        this.players.push(new PlayerCounter(name, 0));
    }

    removePlayer(index: number) {
        if (index < this.players.length) {
            let name = this.players[index].getName();

            if (confirm("Remove " + name + "?")) {
                this.players.splice(index, 1);
            }
        }
    }


    toString() { return "Counter"; }

}


class PlayerCounter {
    name: string;
    points: number;

    constructor(n: string, p: number) {
        this.name = n;
        this.points = p;
    }

    getName() { return this.name; }
    setName(n: string) {
        this.name = n;
    }

    getPoints() { return this.points; }
    setPoints(p: number) {
        this.points = p;
    }

    addPoints(p: number) {
        this.points += p;
    }
}

class Notification {
    s: string;
    id: number;

    constructor(n: number) {
        this.s = n > 0 ? "+" + n : "" + n ;
        this.id = _ID++;
    }

    getID() { return this.id }
    toString() { return this.s; }
}
