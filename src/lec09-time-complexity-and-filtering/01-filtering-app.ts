import { print, csvToList } from "introcs";
import { List, cons, listify, first, rest } from "introcs/list";

export let main = async () => {

    // The following line prompts the user to load a CSV file.
    let games: List<Game> = await csvToList("Basketball Data", Game);
    
    // TODO #5 - assign to games the result of calling filterByWins
    
    // Hands-on #2 TODO: Replace 0 with a correct function call.
    let totalGames: number = 0;
    print("JBII has played in " + totalGames + " games this szn.");

    // Hands-on #3 TODO: Replace 0 with correct, nested function 
    // calls to gamesToPoints and a function that adds up a list
    // of numbers.
    let totalPoints: number = 0;
    print("JBII has scored " + totalPoints + " points this szn.");
    
};

/*
The Game class declares the properties every Game object
will have as well as their "default" values. One way to think
of a property is as the title of a column in a data table. Each
object, then, has its own row in the table.
*/
class Game {
    date: string = "";
    opponent: string = "";
    uncPoints: number = 0;
    opponentPoints: number = 0;
    minutes: number = 0;
    points: number = 0;
    assists: number = 0;
}

/**
 * The filterByWins function, given a list of Games, will
 * return a list of only the games UNC won. It will do this
 * by finding games where a game's uncPoints property is 
 * greater than the opponentPoints property.
 */
let filterByWins = (games: List<Game>): List<Game> => {
    // TODO #4
    return null;
};

/**
 * The gamesToPoints function, given a list of Games, will
 * return a list of only the points property of each Game.
 */
let gamesToPoints = (games: List<Game>): List<number> => {
    if (games === null) {
        return null;
    } else {
        let game: Game = first(games);
        return cons(game.points, gamesToPoints(rest(games)));
    }
};

/**
 * TODO COMMENT: Describe what the function below does in this comment.
 */
let foo = (games: List<Game>): number => {
    if (games === null) {
        return 0;
    } else {
        return 1 + foo(rest(games));
    }
};

/**
 * TODO: Describe what the function below does in this comment.
 */
let bar = (values: List<number>): number => {
    if (values === null) {
        return 0;
    } else {
        return first(values) + bar(rest(values));
    }
};

main();