import { print } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

export let main = async () => {
    
    print("Bouncer Algo - Take 1");

    print("Entrance Line:");
    let entranceLine: List<number>;
    entranceLine = listify(18, 20, 22, 21, 22, 24, 50, 20, 17, 18);
    print(entranceLine);

    print("Bar Line:");
    // Test the bouncer Function
    let barLine: List<number>;
    barLine = bouncer(entranceLine);
    print(barLine);

};

let bouncer = (line: List<number>): List<number> => {
    if (line === null) {
        return null;
    } else {
        let person: number = first(line);
        // TODO
        return null;
    }
};

main();