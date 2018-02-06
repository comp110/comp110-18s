import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

let acronymify = (words: List<string>): List<string> => {
    if (words === null) {
        return null;
    } else {
        let letter: string = first(words).substr(0, 1);
        if (letter >= "A" && letter <= "Z") {
            return cons(letter, acronymify(rest(words)));
        } else {
            return acronymify(rest(words));
        }
    }
};

export let main = async () => {
    let original = listify("University", "of", "North", "Carolina");
    let acronym = acronymify(original);
    print(original);
    print(acronym);
};

main();