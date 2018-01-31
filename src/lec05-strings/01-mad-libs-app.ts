import { print, promptString, promptNumber } from "introcs";

export let main = async () => {
    
    // Part 1:
    // Prompt the user for a positive and negative adjective
    let positiveAdj: string = await promptString("Enter a positive adjective");
    let negativeAdj: string = await promptString("Enter a negative adjective");

    // TODO: Prompt the user for a verb
    let verb: string = "";
    
    // TODO: Prompt the user for a small number
    let uncScore: number = await promptNumber("Enter a large number");
    let dookScore: number = 0;
    
    // TODO: Compute the difference between the two scores in a number variable called winBy
    let winBy: number = 0;

    /* ***Check in on Poll Everywhere*** */

    // Part 2:
    let madLib1: string = "";
    let madLib2: string = "";
    let madLib3: string = "";

    // TODO: Concatenate the individual parts into finalMadLib
    let finalMadLib: string = "";

    // Print the finalMadLib
    
    print(finalMadLib);

};
main();