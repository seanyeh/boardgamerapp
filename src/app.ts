import * as m from 'mithril';

import { Counter } from "./counter";
import { Dice } from "./dice";
import { Players } from "./players";
import { Layout } from "./layout";

window.onload = () => {
    var routes: any = {
        "/counter": new Layout(new Counter()),
        "/dice": new Layout(new Dice()),
        "/players": new Layout(new Players())
    }

    m.route((document.body as any), "/dice", routes);
}
