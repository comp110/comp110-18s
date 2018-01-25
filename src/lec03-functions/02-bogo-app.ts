import { print, promptNumber } from "introcs";

let max = (a: number, b: number): number => {
    // TODO: Implement max Function
    return 100000;
};

export let main = async () => {

    print("Spicy9 BOGO Calculator");

    let roll0: number = await promptNumber("Roll 0 $");
    let roll1: number = await promptNumber("Roll 1 $");

    // Notice we are calling max with the values of roll0 and roll1
    let cost: number = max(roll0, roll1);

    print("The BOGO cost is...");
    print(cost);

};

main();