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

    let points: List<number> = map(games, gameToPoints);
    
    // TODO #2 - Assign to high the result of calling reduce with arguments
    // 1. the points array
    // 2. your max reducer function
    // 3. an initial memo value of 0
    let high: number = 0;

    print("Berry's Season Record Points:");
    print(high);
};

// TODO #1 - Write a function named max that is given two numbers
// and will return the larger of the two numbers. It is a Reducer.


// == Transforms ==
let gameToPoints = (g: Game): number => {
    return g.points;
};

// == Functional Interfaces ==
interface Transform<T, U> {
    (item: T): U;
}

interface Reducer<T, U> {
    (memo: U, item: T): U;
}


// == map & reduce ==
let map = <T, U> (xs: List<T>, f: Transform<T, U>): List<U> => {
    if (xs === null) {
        return null;
    } else {
        return cons(f(first(xs)), map(rest(xs), f));
    }
};

let reduce = <T, U> (xs: List<T>, f: Reducer<T, U>, memo: U): U => {
    if (xs === null) {
        return memo;
    } else {
        return reduce(rest(xs), f, f(memo, first(xs)));
    }
};

main();