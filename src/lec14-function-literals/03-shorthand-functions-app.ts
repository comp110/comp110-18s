import { print } from "introcs";
import { listify } from "introcs/list";
import { filter, map, reduce } from "./list-utils";

export let main = async () => {
    let input = listify("great", "day", "to", "be", "a", "tar!", "heel!", "daggum");

    // TODO: Convert the function literals to shorthand syntax
    let long = filter(input, (s) => { return s.length > 3; });
    
    let initials = map(long, (s) => { return s.substr(0, 1); });
    
    let result = reduce(initials, (m, s) => { return m + s; }, "");

    print(result);
};

main();