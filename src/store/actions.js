import {ActionType} from "./mutation-types";

export const addFn = ({commit},data) => {
    commit(ActionType.ADD_COUNT,data);
};
export const reduceFn = ({commit},data) => {
    commit(ActionType.REDUCE_COUNT,data);
};