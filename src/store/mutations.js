import {ActionType} from "./mutation-types";

export default {
    [ActionType.ADD_COUNT](state, n) {
        state.count+=n;
    },
    [ActionType.REDUCE_COUNT](state, n) {
        state.other_count-=n;
    },
}