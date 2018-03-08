import { print } from "introcs";
import { listify } from "introcs/list";
import { filter, map, reduce } from "./list-utils";

export let main = async () => {

    print("Input:");
    let input = listify("great", "day", "to", "be", "a", "tar!", "heel!", "daggum");
    print(input);

    // TODO #1 - Remove the types which can be inferred below

    print("Filtered:");
    let long = filter(input, (s: string): boolean => {
        return s.length > 3;
    });
    print(long);

    print("Mapped:");
    let initials = map(long, (s: string): string => {
        return s.substr(0, 1);
    });
    print(initials);

    // TODO #2 - reduce the initials to a single string

};

main();