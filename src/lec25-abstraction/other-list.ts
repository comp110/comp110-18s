/* This file implements cons, first, and rest using arrays. */

export type List<T> = T[] | null;

export let cons = <T> (value: T, next: List<T>): T[] => {
    if (next === null) {
        return [value];
    } else {
        return [value].concat(next);
    }
};

export let first = <T> (list: List<T>): T => {
    if (list === null) {
        throw new Error("Cannot call first on null!");
    } else {
        return list[0];
    }
};

export let rest = <T> (list: List<T>): List<T> => {
    if (list === null) {
        throw new Error("Cannot call rest on null!");
    } else {
        if (list.length === 1) {
            // It's important that when we ask for rest of the
            // last "Node" we return null. This is one of the rules
            // of the abstraction.
            return null;
        } else {
            return list.slice(1);
        }
    }
};