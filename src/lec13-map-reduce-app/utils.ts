import { List, cons, first, rest, listify } from "introcs/list";

interface Transform<T, U> {
    (item: T): U;
}

interface Reducer<T, U> {
    (memo: U, item: T): U;
}

interface Predicate<T> {
    (item: T): boolean;
}

export let filter = <T>(xs: List<T>, test: Predicate<T>): List<T> => {
    if (xs === null) {
        return null;
    } else if (test(first(xs))) {
        return cons(first(xs), filter(rest(xs), test));
    } else {
        return filter(rest(xs), test);
    }
};

export let map = <T, U> (xs: List<T>, f: Transform<T, U>): List<U> => {
    if (xs === null) {
        return null;
    } else {
        return cons(f(first(xs)), map(rest(xs), f));
    }
};

export let reduce = <T, U> (xs: List<T>, f: Reducer<T, U>, memo: U): U => {
    if (xs === null) {
        return memo;
    } else {
        return reduce(rest(xs), f, f(memo, first(xs)));
    }
};