import { print } from "introcs";

export let main = async () => {
    // TODO #1 Declare an array of numbers
    
    // TODO #2 Append a number to the array via the append function

    // TODO #3 print the array of numbers
};

let append = <T> (a: T[], item: T): void => {
    a[a.length] = item;
};

main();