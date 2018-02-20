import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

export let main = async () => {
    
    let setA: List<string> = listify("a", "b");
    print("setA is");
    print(setA);

    let setB: List<string> = listify("b", "c");
    print("setB is");
    print(setB);

    let setAuB: List<string> = union(setA, setB);
    print("The union of setA and setB is");
    print(setAuB);
    
};

/**
 * Given Lists a and b, return a List that is the union
 * of a and b. More formally: a U b
 */
let union = <T>(a: List<T>, b: List<T>): List<T> => {
    return null;
};

/**
 * Do the elements in List `a` include `item`? 
 */
let includes = <T>(a: List<T>, item: T): boolean => {
    if (a === null) {
        return false;
    } else if (first(a) === item) {
        return true;
    } else {
        return includes(rest(a), item);
    }
};

main();