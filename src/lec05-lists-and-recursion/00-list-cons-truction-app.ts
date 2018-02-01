import { print } from "introcs";
import { List, cons } from "introcs/list";

export let main = async () => {

    // Declare a List variable
    let names: List<string>;

    // Establish an empty List
    print("An empty List:");
    names = null;
    print(names);

    // cons-struct a single-value list
    print("Single-value list:");
    
    print(names);

    // con-struct a multi-value list
    print("List of length 2:");
    
    print(names);

    // cons-struct a list based on itself
    print("cons'ing onto an existing list");
    
    print(names);

};

main();