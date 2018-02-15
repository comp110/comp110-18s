import { print } from "introcs";
import { List, first, rest, listify } from "introcs/list";

let main = async () => {
    print(max1(listify(1, 2, 3, 4, 5)));
};

let max1 = (values: List<number>): number => {
    print("max1: " + values);
    if (values === null) {
        return Number.MIN_SAFE_INTEGER;
    } else {
        let front: number = first(values);
        let maxRest: number = max1(rest(values));
        if (front > maxRest) {
            return front;
        } else {
            return maxRest;
        }
    }
};

let max2 = (values: List<number>): number => {
    print("max2: " + values);
    if (values === null) {
        return Number.MIN_SAFE_INTEGER;
    } else {
        if (first(values) > max2(rest(values))) {
            return first(values);
        } else {
            return max2(rest(values));
        }
    }
};

main();
