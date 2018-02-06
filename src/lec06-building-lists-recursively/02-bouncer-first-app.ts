import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

let bouncer = (list: List<number>): List<number> => {
    if (list === null) {
        return null;
    } else {
        let person: number = first(list);
        if (person < 21) {
            return rest(list);
        } else {
            return cons(person, bouncer(rest(list)));
        }
    }
};

export let main = async () => {
    
    print("Bouncer Algo - Take 1");

    print("Entrance Line:");
    let entranceLine: List<number>;
    entranceLine = listify(18, 20, 22, 21, 22, 24, 50, 20, 17, 18);
    print(entranceLine);

    print("Bar Line:");
    let barLine: List<number>;
    barLine = bouncer(entranceLine);
    print(barLine);

};

main();