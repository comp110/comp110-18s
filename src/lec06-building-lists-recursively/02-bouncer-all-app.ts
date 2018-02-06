import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

export let main = async () => {

    print("Bouncer Algo - Take 2");

    print("Entrance Line:");
    let entranceLine: List<number>;
    entranceLine = listify(18, 20, 22, 21, 22, 24, 50, 20, 17, 18);
    print(entranceLine);

    print("Bar Line:");
    let barLine: List<number>;
    barLine = bouncer(entranceLine);
    print(barLine);

};

// TODO: Fix the bouncer function.
let bouncer = (line: List<number>): List<number> => {
    if (line === null) {
        return null;
    } else {
        let person: number = first(line);
        if (person < 21) {
            return rest(line);
        } else {
            return cons(person, bouncer(rest(line)));
        }
    }
};

main();