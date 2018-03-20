import { print } from "introcs";

export let main = async () => {
    let points = [10, 20, 30, 40];
    print("The sum of...");
    print(points);
    print("is... ");
    print(sum(points));
};

let sum = (a: number[]): number => {

    let total = 0;
    
    // TODO: Write a while loop
    let i = 0;
    // It should:
    // 1. Loop while i is less than parameter a's length
    // 2. Inside the loop:
    //    2.1. Increase the total variable by a[i]
    //    2.2. Increment i by 1

    return total;

};

main();