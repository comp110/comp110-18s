import { print, promptNumber } from "introcs";

// TODO #1: Implement perimeter's return statement expression.
let perimeter = (length: number, width: number): number => {
    return 0;
};


export let main = async () => {

    let length: number = await promptNumber("Length");
    let width: number = await promptNumber("Width");
    
    // TODO #2: Call the function perimeter
    let result: number = 0;
    
    print(result);

};

main();