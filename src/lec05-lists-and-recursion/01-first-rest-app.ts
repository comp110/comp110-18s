import { print } from "introcs";
import { List, cons, first, rest } from "introcs/list";

export let main = async () => {

    // Establish a List of numbers
    let series: List<number>;
    series = cons(10, cons(20, cons(30, null)));
    print(series);

    // Print the first value in the series

    // Print the rest of the values in the series
    // NOTE: This is not changing the value of series.

    // TODO: Print the second value in the series

    // TODO: Print the third value in the series

};

main();