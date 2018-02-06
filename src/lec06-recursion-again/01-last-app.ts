import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

let last = (names: List<string>): string => {
    if (names === null) {
        throw new Error("Cannot call last on empty list");
    } else {
        if (rest(names) === null) {
            return first(names);
        } else {
            return last(rest(names));
        }
    }
};

let append = (names: List<string>, name: string): List<string> => {
    if (names === null) {
        return cons(name, null);
    } else {
        return cons(first(names), append(rest(names), name));
    }
};

export let main = async () => {
    let list = listify("Michael", "Jan", "Pam", "Jan", "Holly");
    print(last(list));
    // print(last(null));
    print(append(list, "Kevin"));
};

main();