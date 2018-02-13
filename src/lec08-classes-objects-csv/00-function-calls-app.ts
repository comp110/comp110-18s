import { print } from "introcs";
import { List, cons, listify, first, rest } from "introcs/list";

export let main = async () => {
    
    let list: List<number> = listify(101, 110, 116, 401);

    // TODO #1 - Call the get function, with the list above. Print the result.
    // Choose an argument for parameter i that will cause 110 be printed out.

    // TODO #2 - Call the get function below, with the list above. Print the result
    // Choose an argument for parameter i that will cause "Index i is out of bounds" to print.

};

let get = (a: List<number>, i: number): number => {
    if (a === null) {
        throw new Error("Index i is out of bounds.");
    } else {
        if (i === 0) {
            return first(a);
        } else {
            return get(rest(a), i - 1);
        } 
    }
};

main();