import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

let main = async () => {
    let input: List<number> = listify(-2, -1, 0, 1, 2);
    // TODO #3: Try calling filter with different predicates
    let output: List<number> = filter(input);
    print(output); 
};

// Predicates "Test Functions"
let isPositive = (item: number): boolean => { return item > 0; };
let isNegative = (item: number): boolean => { return item < 0; };
let isZero = (item: number): boolean => { return item === 0; };

// TODO #1: Define a functional interface for Predicate

// TODO #2: Add a parameter to supply the test function, fix the implementation
let filter = (xs: List<number>): List<number> => {
    if (xs === null) {
        return null;
    } else if (isPositive(first(xs))) {
        return cons(first(xs), filter(rest(xs)));
    } else {
        return filter(rest(xs));
    }
};

main();