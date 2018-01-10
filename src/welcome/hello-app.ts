import { print, promptString, promptNumber, promptBoolean } from "introcs";

let main = async () => {
    let name = await promptString("Hi! What is your name?");
    print("Hello " + name + "! Welcome to Computer Science at UNC!");
};

main();