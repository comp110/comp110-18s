/**
 * Author: TODO #0
 *
 * ONYEN: TODO #0
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */

import { print, csvToList } from "introcs";
import { List, first } from "introcs/list";
import { filter, map, reduce } from "./list-utils";
import { Game } from "./Game";

export let main = async () => {
    // Load players' game data
    let games = await csvToList("Select data/ps04-player-data.csv", Game);

    // TODO #1: Delete this comment and the following line...
    print(games);

    // TODO #2: Test your functions here

};

// TODO: Define and export your analysis functions here...

main();