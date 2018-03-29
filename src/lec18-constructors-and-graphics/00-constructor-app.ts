import { print } from "introcs";

class Point {
    x: number = 0;
    y: number = 0;

    // TODO 1: define a constructor that initializes x and y

}

export let main = async () => {

    // TODO 2: initialize a with x 10, y 20 using the constructor
    let a = new Point();
    a.x = 10;
    a.y = 20;
    print(a);

};

main();