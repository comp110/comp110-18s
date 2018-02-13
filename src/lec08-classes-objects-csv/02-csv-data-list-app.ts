import { print, csvToList } from "introcs";
import { List, cons, listify, first, rest } from "introcs/list";

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

    let games: List<Game> = await csvToList("Basketball Data", Game);
    print(games);

};

let gamesToPoints = (games: List<Game>): List<number> => {
    if (games === null) {
        return null;
    } else {
        let game: Game = first(games);
        return cons(game.points, gamesToPoints(rest(games)));
    }
};

let gamesToUNCPoints = (games: List<Game>): List<number> => {
    if (games === null) {
        return null;
    } else {
        let game: Game = first(games);
        return cons(game.uncPoints, gamesToUNCPoints(rest(games)));
    }
};

let total = (values: List<number>): number => {
    if (values === null) {
        return 0;
    } else {
        return first(values) + total(rest(values));
    }
};


main();