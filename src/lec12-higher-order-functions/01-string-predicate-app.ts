import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

let main = async () => {
    let input: List<string> = listify(
        "the",
        "quick",
        "brown",
        "fox",
        "jumped",
        "over",
        "the",
        "lazy",
        "dog"
    );

    // TODO #2: Change the predicate function to use longWords
    let output: List<string> = filter(input, hasAnXorZ);
    print(output); 
};

// Predicates
let hasAnXorZ = (word: string): boolean => {
    return word.includes("x") || word.includes("z");
};

// TODO #1: Define the `longWords` function below


interface Predicate {
    (item: string): boolean;
}

let filter = (xs: List<string>, test: Predicate): List<string> => {
    if (xs === null) {
        return null;
    } else if (test(first(xs))) {
        return cons(first(xs), filter(rest(xs), test));
    } else {
        return filter(rest(xs), test);
    }
};

main();