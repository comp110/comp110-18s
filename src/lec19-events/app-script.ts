import { Lite } from "./Lites";

import {
    SVG,
    Group
} from "introcs/graphics";

/* Constants */
const DIAMETER = 20;
const RADIUS = DIAMETER / 2;
const ROWS = 20;
const COLUMNS = 20;
const START_X = (window.innerWidth / 2) - (COLUMNS * DIAMETER) / 2;
const START_Y = 20;

/* Global Variables */
let lites: Lite[] = [];

/* Main Functionality */
let main = async () => {
    let svgTag = new SVG("artboard");
    svgTag.autoScale = false;
    let scene = new Group();
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            let lite = new Lite(RADIUS, START_X + i * DIAMETER, START_Y + j * DIAMETER);
            scene.add(lite);
            lites[lites.length] = lite;
        }
    }

    svgTag.render(scene);

    setInterval(update, 30);
};

let update = (): void => {
    for (let i = 0; i < lites.length; i++) {
        lites[i].update();
    }
};

main();