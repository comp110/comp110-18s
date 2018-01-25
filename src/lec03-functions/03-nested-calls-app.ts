import { print, promptNumber } from "introcs";

/**
 * Given 2 values, max will return the largest of the 2.
 */
let max = (a: number, b: number): number => {
    if (a > b) {
        return a;
    }
    return b;
};

/**
 * Given 3 values, max3 will return the largest of all 3.
 */
let max3 = (a: number, b: number, c: number): number => {
    // TODO: Implement max3 using the max function
    return 0;
};

export let main = async () => {
    // TODO: Experiment with different argument values:
    print(max3(1, 2, 3));
};

main();