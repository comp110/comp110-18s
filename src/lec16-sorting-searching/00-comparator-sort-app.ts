import { print, random } from "introcs";
import { Comparator, A_BEFORE_B, A_SAME_AS_B, A_AFTER_B } from "./Comparator";

export let main = async () => {
    let a = randomArray(10, 20);
    print("Unsorted:" + a);

    // TODO #1: Sort a in ascending order
    
    // TODO: Sort a in descending order
    
};

/* Comparator<number> for sorting numbers lowest to highest */
let ascending = (a: number, b: number): number => {
    if (a < b) {
        return A_BEFORE_B;
    } else if (a === b) {
        return A_SAME_AS_B;
    } else {
        return A_AFTER_B;
    }
};

// Notice: If we specify descending's type as Comparator<number>, we can
// rely upon type inference for the parameters and return type.
let descending: Comparator<number> = (a, b) => {
    // TODO: Implement descending
    return 0;
};

/**
 * This function generates an array of length n filled with
 * random numbers from 0 to ceiling.
 */
let randomArray = (n: number, ceiling: number): number[] => {
    let result: number[] = [];
    let i = 0;
    while (i < n) {
        result[i] = random(0, ceiling);
        i++;
    }
    return result;
};

main();