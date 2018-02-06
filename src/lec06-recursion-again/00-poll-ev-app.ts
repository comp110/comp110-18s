import { print } from "introcs";
import { List, cons, first, rest } from "introcs/list";

let fun = (list: List<number>): number => {
    if (list === null) {
        return 0;
    } else {
        return first(list) + fun(rest(list));
    }
};

export let main = async () => {

    let list: List<number> = cons(4, cons(3, cons(2, null)));
    print(fun(list));

};

main();