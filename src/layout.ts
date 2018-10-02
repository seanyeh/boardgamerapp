import * as m from 'mithril';
import { Page, State } from "./page";
import { Assets } from "./assets";

export class Layout {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    toClassName(s: string) {
        return s.replace(" ", "-").toLowerCase();
    }

    genFooterItem(name: string) {
        let lowercaseName = this.toClassName(name);

        let isCurrentPage = this.page.toString() === name;

        let caption = isCurrentPage? "div.caption.focus" : "div.caption";

        return m("div.b3.item", {onclick: () => { m.route.set("/"+lowercaseName); }},
            [
                m("div.icon",
                    m.trust(Assets.svg(lowercaseName, isCurrentPage))
                ),
                m(caption, name)
            ]
        );
    }

    genHeaderItem(state: State) {
        let name = state.getName();
        let lowercaseName = this.toClassName(name);

        let isCurrentState = this.page.getState() == state;

        let caption = isCurrentState? "span.caption.focus" : "span.caption";

        return m("div.b3.item", {onclick: () => { this.page.setState(state); }},
            [
                m.trust(Assets.svg(lowercaseName, isCurrentState)),
                m(caption, name)
            ]
        );
    }

    getHeaderItems() {
    }


    view() {
        let lowercaseName = this.toClassName(this.page.toString());

        return [
            m("h1", this.page.toString()),

            m("div.header",
                this.page.getStates().map( (state) => {
                    return this.genHeaderItem(state);
                })
            ),

            m("div", {class: lowercaseName},
                this.page.view(),
            ),

            m("div.footer", [
                this.genFooterItem("Dice"),
                this.genFooterItem("Players"),
                this.genFooterItem("Counter")
            ])
        ];
    }

}
