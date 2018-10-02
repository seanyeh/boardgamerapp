declare var require: any;

let ICONS: any = {
    "plus": require("./../images/plus-solid.svg"),
    "minus": require("./../images/minus-solid.svg"),
    "plus-circle": require("./../images/plus-circle-solid.svg"),
    "minus-circle": require("./../images/minus-circle-solid.svg"),

    "reset": require("./../images/redo-solid.svg"),

    "remove": require("./../images/times-circle-solid.svg"),


    // Icons

    "dice": require("./../images/dice-light.svg"),
    "dice-focus": require("./../images/dice-solid.svg"),

    "players": require("./../images/users-light.svg"),
    "players-focus": require("./../images/users-solid.svg"),

    "counter": require("./../images/abacus-light.svg"),
    "counter-focus": require("./../images/abacus-solid.svg"),

    // Dice States
    "random": require("./../images/calculator-light.svg"),
    "random-focus": require("./../images/calculator-solid.svg"),

    "coin": require("./../images/coins-light.svg"),
    "coin-focus": require("./../images/coins-solid.svg"),

    // Counter States
    "single": require("./../images/user-cog-light.svg"),
    "single-focus": require("./../images/user-cog-solid.svg"),

    "multiplayer": require("./../images/users-cog-light.svg"),
    "multiplayer-focus": require("./../images/users-cog-solid.svg"),
};

let IMAGES: any = {
    "white1": require("./../images/dieWhite1.png"),
    "white2": require("./../images/dieWhite2.png"),
    "white3": require("./../images/dieWhite3.png"),
    "white4": require("./../images/dieWhite4.png"),
    "white5": require("./../images/dieWhite5.png"),
    "white6": require("./../images/dieWhite6.png"),

    "red1": require("./../images/dieRed1.png"),
    "red2": require("./../images/dieRed2.png"),
    "red3": require("./../images/dieRed3.png"),
    "red4": require("./../images/dieRed4.png"),
    "red5": require("./../images/dieRed5.png"),
    "red6": require("./../images/dieRed6.png"),
}

export class Assets {

    static svg(name: string, focus?: boolean) {
        if (focus) {
            return ICONS[name + "-focus"];
        }

        return ICONS[name];
    }

    static dice(color: string, n: number) {
        return IMAGES[ color + n ];
    }

}
