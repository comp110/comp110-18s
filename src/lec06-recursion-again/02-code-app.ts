import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

let extract = (words: List<string>): List<string> => {
    if (words === null) {
        return null;
    } else {
        return cons(first(words).substr(1, 1), extract(rest(words)));
    }
};

let concat = (words: List<string>): string => {
    if (words === null) {
        return "";
    } else {
        return first(words) + concat(rest(words));
    }
};

let decode = (words: List<string>): string => {
    return concat(extract(words));
};

export let main = async () => {
    let words: List<string> = listify(
        "obstensibly",
        "borderline",
        "ponder",
        "a lot",
        "odd",
        "domes",
        "wonder",
        "sky"
    );

    print(words);
    print("Decoded: " + decode(words));
};

main();