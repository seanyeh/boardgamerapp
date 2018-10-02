import * as m from 'mithril';
import { Assets } from "./assets";
import { Page, State } from "./page";

const ANIMATION_TIMES = 10;
const ANIMATION_TIMEOUT = 50;

export class Dice extends Page {
    dieImage: string = Assets.dice("red", 1);
    isRolling: boolean = false;

    headTail: string = "H";

    constructor(){
        super();

        this.setStates([
            new State("Dice", this.diceView.bind(this)),
            new State("Coin", this.coinView.bind(this)),
            new State("Random", this.randomNumberView.bind(this)),
        ]);
    }


    /*
     * Generic Rolling Function
     */
    genericRoll(randomFunc: () => number, rollFunc: any, postRollFunc: any) {
        if (this.isRolling) {
            console.log("WAIT");
            return;
        }

        this.isRolling = true;
        this._genericRoll(0, randomFunc, rollFunc, postRollFunc);
    }

    _genericRoll(counter: number, randomFunc: () => number, rollFunc: any, postRollFunc: any) {
        let val = randomFunc();

        if (counter > ANIMATION_TIMES) {
            postRollFunc(val);
            this.isRolling = false;
        }
        else {
            rollFunc(val);
            window.setTimeout( () => {
                this._genericRoll(counter + 1, randomFunc, rollFunc, postRollFunc);
            }, ANIMATION_TIMEOUT);
        }

        m.redraw();
    }


    /*
     * Specific Rolling Functions
     */
    diceRoll() {
        this.genericRoll(
            () => { return this.randomInt(6) + 1; },
            (n: number) => { this.dieImage = Assets.dice("white", n); },
            (n: number) => { this.dieImage = Assets.dice("red", n); }
        );

    }

    coinFlip() {
        this.genericRoll(
            () => { return this.randomInt(2); },
            (n: number) => { this.headTail = ["H", "T"][n] },
            (n: number) => { this.headTail = ["H", "T"][n] }
        );
    }


    randomInt(n: number) {
        return Math.floor(n*Math.random());
    }

    getDiceRoll() {
        return Math.floor(6*Math.random()) + 1;
    }

    view() {
        return super.view();
    }

    toString() { return "Dice"; }


    // Views
    diceView() {
        return [
            m("div.container", [
                m("div.dice-image",
                    m("img", {src: this.dieImage})
                ),

                m("div.roll",
                    m("a", {onclick: this.diceRoll.bind(this)}, "roll")
                )
            ])
        ]
    }

    coinView() {
        return [
            m("div.container", [
                m("div.coin", {class: this.isRolling? "black" : "gray"}, this.headTail),
                m("div.roll",
                    m("a", {onclick: () => { this.coinFlip(); }}, "Flip")
                )
            ])
        ];
    }

    randomNumberView() {
        return m("div", "random number view");
    }
}


