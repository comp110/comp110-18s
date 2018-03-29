import { print } from "introcs";

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

let artboard = new SVG("artboard");

class Dot extends Circle {
    onclick = (e: MouseEvent) => {
        alert("Hello" + this.cy);
    }

}

export let main = async () => {
    let g = new Group();

    let axes = new Axes(100, 100);
    // g.add(axes.getShapes());
    
    let time: number = Date.now() / MS_IN_S;
    let periodPercent: number = time % PERIOD / PERIOD;
    let count = 20;
    for (let i = 0; i < count; i++) {
        let percent = i / count;
        let angle = percent * RADIANS;
        let angleT: number = periodPercent * RADIANS;
        let cy = Math.sin(angle + angleT) * 100;
        let c = new Dot(10, 100 - 20 * i - 10, cy);
        let red = 0;
        let green = 1 - percent;
        let blue = percent;
        c.fill = new Color(red, green, blue);
        g.add(c);
    }

    artboard.render(g);
};

setInterval(main, 20);

main();