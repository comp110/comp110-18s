import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

export let main = async () => {

    print("Poor Richard's Bar VIP Night");
    
    print("Entrance Line:");
    let entranceLine: List<string>;
    entranceLine = listify("Michael", "Jim", "Jan", "Pam", "Gabe", "Holly");
    print(entranceLine);

    print("Blacklist");
    let blacklist: List<string> = listify("Jan", "Gabe");
    print(blacklist);

    print("Bar Line:");
    // Test Case
    let barLine: List<string>;
    barLine = bounceList(entranceLine, blacklist);
    print(barLine);

};

/**
 * Given a List, and a List of banned strings, return a new
 * List with all of the original strings not in the banned List.
 */
let bounceList = (line: List<string>, banned: List<string>): List<string> => {
    if (line === null) {
        return null;
    } else {
        let person: string = first(line);
        // TODO: Add the additional processing logic here.
        return null;
    }
};

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

main();