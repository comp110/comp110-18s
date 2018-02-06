import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

let remove = (list: List<string>, name: string): List<string> => {
    if (list === null) {
        return null;
    } else {
        if (first(list) === name) {
            // Return the rest of the list
            return rest(list);
        } else {
            // Return the current node and remove applied to the rest of the list
            return cons(first(list), remove(rest(list), name));
        }
    }
};

let removeAll = (names: List<string>, term: string): List<String> => {
    if (names === null) {
        return null;
    } else {
        if (first(names) === name) {
            return remove(rest(names), name);
        } else {
            return cons(first(names), remove(rest(names), name));
        }
    }
};

export let main = async () => {
    let list = listify("Michael", "Jan", "Pam", "Jan", "Holly");
    print(list);
    print(remove(list, "Jan"));
};

main();