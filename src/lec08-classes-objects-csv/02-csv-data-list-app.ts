import { print, csvToList } from "introcs";
import { List, cons, listify, first, rest } from "introcs/list";

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

export let main = async () => {

    // The following line prompts the user to load a CSV file.
    let games: List<Game> = await csvToList("Basketball Data", Game);
    print("Games");
    print(games);

    // Extract just a list of Joel's points per game
    let points: List<number> = gamesToPoints(games);
    print("Points");
    print(points);

    // Total all the points
    let total: number = addUp(points);
    print("Total");
    print(total);

};

/**
 * The gamesToPoints function, given a list of Games, will
 * return a list of only the points property of each game.
 */
let gamesToPoints = (games: List<Game>): List<number> => {

    // TODO: Fix this implementation
    return null;

};

/**
 * The addUp function, given a list of numbers, will
 * return the addUp of all numbers added together.
 */
let addUp = (values: List<number>): number => {
    if (values === null) {
        return 0;
    } else {
        return first(values) + addUp(rest(values));
    }
};


main();