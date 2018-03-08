import { print } from "introcs";
import { listify } from "introcs/list";
import { filter, map, reduce } from "./list-utils";

export let main = async () => {

    print("Input:");
    let input = listify("great", "day", "to", "be", "a", "tar!", "heel!", "daggum");

    let long = filter(input, (s: string): boolean => {
        return s.length > 3;
    });

    print("Mapped:");
    // TODO


};

main();