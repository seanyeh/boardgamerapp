export class Page {
    states: State[];
    state: State;

    getStates() {
        if (this.states == null) {
            return [];
        }
        return this.states;
    }

    setStates(states: State[]) {
        this.states = states;

        if (states.length > 0) {
            this.setState(states[0]);
        }
    }

    setState(state: State) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    view() {
        if (this.getState()) {
            return this.getState().view();
        }
    }
}

export class State {
    name: string;
    viewFunc: any;

    constructor(name: string, f: any) {
        this.name = name;
        this.viewFunc = f;
    }

    getName() {
        return this.name;
    }

    view() {
        return this.viewFunc();
    }
}
