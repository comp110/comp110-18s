import { print, csvToList } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

class Game {
    date: string = "";
    opponent: string = "";
    uncPoints: number = 0;
    opponentPoints: number = 0;
    minutes: number = 0;
    points: number = 0;
    assists: number = 0;
}

export let main = async () => {
    let games: List<Game> = await csvToList("Select Games Data", Game);

    let points: List<number> = null;
    
    // TODO #2 - Assign to points the result of calling map with
    // the games List and the gameToPoints function you wrote below.

    print("Berry's Points:");
    print(points);
};

// TODO #1: Define a function named gameToPoints
// It should take in a Game object as a parameter and return a number
// The number it returns should be the game's points property

/**
 * Transform is any function that takes a single value and 
 * returns another value.
 */
interface Transform<T, U> {
    (item: T): U;
}

/**
 * Given a list of values, map will return a new list of values with
 * the function f applied to every element in the original list.
 */
let map = <T, U> (xs: List<T>, f: Transform<T, U>): List<U> => {
    if (xs === null) {
        return null;
    } else {
        return cons(f(first(xs)), map(rest(xs), f));
    }
};

main();