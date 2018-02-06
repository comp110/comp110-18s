import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

/**
 * The `includes` function will return true/false whether a List
 * includes a specific `search` value.
 */
let includes = (list: List<string>, search: string): boolean => {
    if (list === null) {
        return false;
    } else {
        if (first(list) === search) {
            return true;
        } else {
            return includes(rest(list), search);
        }
    }
};

/**
 * Given a List, and a List of banned strings, return a new
 * List with all of the original strings not in the banned List.
 */
let removeList = (list: List<string>, banned: List<string>): List<string> => {
    if (list === null) {
        return null;
    } else {
        let person: string = first(list);
        if (includes(banned, person)) {
            return removeList(rest(list), banned);
        } else {
            return cons(person, removeList(rest(list), banned));
        }
    }
};

export let main = async () => {

    print("Poor Richard's Bar VIP Night");
    
    print("Entrance Line:");
    let entranceLine: List<string>;
    entranceLine = listify("Michael", "Jim", "Jan", "Pam", "Gabe", "Holly");
    print(entranceLine);

    let blacklist: List<string> = listify("Jan", "Gabe");

    print("Bar Line:");
    let barLine: List<string>;
    barLine = removeList(entranceLine, blacklist);
    print(barLine);

};

main();