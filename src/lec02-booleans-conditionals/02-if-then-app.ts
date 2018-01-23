import { print, promptNumber } from "introcs";

export let main = async () => {

    let snow: number = await promptNumber("How much snow?");

    // TODO:
    // IF snow is greater than 2
    //  THEN print "classes cancelled"

    print("Have a great day!");

};

main();