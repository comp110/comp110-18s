import { print, csvToList } from "introcs";
import { List, listify } from "introcs/list";
import { Game } from "./Game";
import { filter, map, reduce } from "./list-utils";
import { Predicate, Transform, Reducer } from "./list-utils";

export let main = async () => {
    // TODO - Remove the explicit types below
    let games: List<Game> = await csvToList("Game Data", Game);
    let filtered: List<Game> = filter(games, isWin);
    let values: List<number> = map(filtered, toPoints);
    let result: number = reduce(values, sum, 0);
    print("Result: " + result);
};

// Predicates
let isWin = (g: Game): boolean => {
    return g.uncPoints > g.opponentPoints;
};

let fewPoints = (g: Game): boolean => {
    return g.points < 15;
};

// Transforms
let toPoints = (g: Game): number => {
    return g.points;
};

let toAssists = (g: Game): number => {
    return g.assists;
};

// Reducers
let sum = (m: number, n: number): number => {
    return m + n;
};

let max = (m: number, n: number): number => {
    if (m > n) {
        return m;
    } else {
        return n;
    }
};

main();