import { print, csvToList } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

export let main = async () => {

    let numbers: List<number> = listify(1, 2, 3);
    print(numbers);
    print(includes(numbers, 4));
    
    // TODO #2 - After making includes generic, try
    // testing it with a list of string values.

};

/**
 * TODO #1: Make the includes function generic
 */
let includes = (a: List<number>, item: number): boolean => {
    if (a === null) {
        return false;
    } else {
        if (first(a) === item) {
            return true;
        } else {
            return includes(rest(a), item);
        }
    }
};


main();