import { print, csvToList } from "introcs";
import { listify } from "introcs/list";
import { filter, map, reduce } from "./list-utils";
import { Game } from "./Game";

export let main = async () => {
   
    let games = await csvToList("Select Games Data", Game);

    // In games that UNC won (filter)

    // How many *points* (map)

    // Did Joel Berry Score in total? (reduce)

};

main();