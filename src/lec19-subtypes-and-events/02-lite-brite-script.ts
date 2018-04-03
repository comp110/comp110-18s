import { Lite } from "./Lites";

import {
    SVG,
    Group
} from "introcs/graphics";

/* Constants */
const DIAMETER = 30;
const RADIUS = DIAMETER / 2;
const ROWS = 20;
const COLUMNS = 20;
const START_X = (window.innerWidth / 2) - (COLUMNS * DIAMETER) / 2;
const START_Y = 20;

/* Global Variables */
let lites: Lite[] = [];

/* Main Functionality */
let main = async () => {
    let artboard = new SVG("artboard");
    artboard.autoScale = false;
    let scene = new Group();
    
    // TODO #1: Write your nested for loop here


    artboard.render(scene);

    // TODO: Use setInterval to call the tick function every 500ms

};

// TODO: Define a tick function here

main();