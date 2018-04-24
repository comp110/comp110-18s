import { print } from "introcs";
import { List, cons, first, rest } from "introcs/list";

export let main = async () => {
    
    let names = cons("Pam", null);
    names = cons("Kevin", names);
    names = cons("Michael", names);

    print(toString(map(names, (s) => s.length)));

};

interface Transform<T, U> {
    (item: T): U;
}

let map = <T, U> (list: List<T>, f: Transform<T, U>): List<U> => {
    if (list === null) {
        return null;
    } else {
        return cons(f(first(list)), map(rest(list), f));
    }
};

let toString = <T> (list: List<T>): string => {
    if (list === null) {
        return "null";
    } else {
        return first(list) + " -> " + toString(rest(list));
    }
};

main();