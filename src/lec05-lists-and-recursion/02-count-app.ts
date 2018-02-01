import { print } from "introcs";
import { List, cons, first, rest } from "introcs/list";

// TODO
let count = (list: List<string>): number => {
    return 0;
};

export let main = async () => {
    
    // Establish a List of values
    let names: List<string>;
    names = cons("Rameses", cons("Carol", null));

    // Print the number of values in the List
    print(count(names));

};

main();