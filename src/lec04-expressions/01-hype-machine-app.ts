import { print, promptString, random } from "introcs";

// TODO: define the hypeUp function here

export let main = async () => {

    print("Welcome to the Hype Machine");
    let name: string = await promptString("What is your name?");
    
    // TODO: call the hypeUp function and pass name as an argument

};

main();