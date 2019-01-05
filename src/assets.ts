declare var require: any;

let ICONS: any = {
    "plus": require("./../assets/plus-solid.svg"),
    "minus": require("./../assets/minus-solid.svg"),
    "plus-circle": require("./../assets/plus-circle-solid.svg"),
    "minus-circle": require("./../assets/minus-circle-solid.svg"),

    "reset": require("./../assets/redo-solid.svg"),

    "remove": require("./../assets/times-circle-solid.svg"),


    // Icons

    "dice": require("./../assets/dice-light.svg"),
    "dice-focus": require("./../assets/dice-solid.svg"),

    "players": require("./../assets/users-light.svg"),
    "players-focus": require("./../assets/users-solid.svg"),

    "counter": require("./../assets/abacus-light.svg"),
    "counter-focus": require("./../assets/abacus-solid.svg"),

    // Dice States
    "random": require("./../assets/calculator-light.svg"),
    "random-focus": require("./../assets/calculator-solid.svg"),

    "coin": require("./../assets/coins-light.svg"),
    "coin-focus": require("./../assets/coins-solid.svg"),

    // Counter States
    "single": require("./../assets/user-cog-light.svg"),
    "single-focus": require("./../assets/user-cog-solid.svg"),

    "multiplayer": require("./../assets/users-cog-light.svg"),
    "multiplayer-focus": require("./../assets/users-cog-solid.svg"),
};

let IMAGES: any = {
    "white1": require("./../assets/dieWhite1.png"),
    "white2": require("./../assets/dieWhite2.png"),
    "white3": require("./../assets/dieWhite3.png"),
    "white4": require("./../assets/dieWhite4.png"),
    "white5": require("./../assets/dieWhite5.png"),
    "white6": require("./../assets/dieWhite6.png"),

    "red1": require("./../assets/dieRed1.png"),
    "red2": require("./../assets/dieRed2.png"),
    "red3": require("./../assets/dieRed3.png"),
    "red4": require("./../assets/dieRed4.png"),
    "red5": require("./../assets/dieRed5.png"),
    "red6": require("./../assets/dieRed6.png"),
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
