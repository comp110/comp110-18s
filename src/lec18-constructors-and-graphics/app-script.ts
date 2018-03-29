import "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

import { Axes } from "./Axes";

const RADIANS = 2 * Math.PI;
const PERIOD: number = 5;
const MS_IN_S: number = 1000;

let svgTag = new SVG("artboard");

export let main = async () => {
    let g = new Group();

    let axes = new Axes(100, 100);
    g.add(axes.getShapes());
    
    let time: number = Date.now() / MS_IN_S;
    let periodPercent: number = time % PERIOD / PERIOD;
    
    for (let i = 0; i < 10; i++) {
        let percent = i / 10;
        let angle = percent * RADIANS;
        let angleT: number = periodPercent * RADIANS;
        let cy = Math.sin(angle + angleT) * 20;
        let c = new Circle(10, 100 - 20 * i - 10, cy);
        let red = 0;
        let green = 0;
        let blue = i / 10;
        c.fill = new Color(red, green, blue);
        g.add(c);
    }

    svgTag.render(g);
};

setInterval(main, 16);

main();