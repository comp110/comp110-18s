import { print, csvToList } from "introcs";
import { List, listify } from "introcs/list";
import { filter, map, reduce } from "./utils";

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
    let games: List<Game> = await csvToList("Game Data", Game);
    let wins = filter(games, (g) => { return g.uncPoints > g.opponentPoints; });
    let points = map(wins, (g) => { return g.points; });
    let total = reduce(points, (total, game) => { return total + 1; }, 0);
    print(total);
};

main();