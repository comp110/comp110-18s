import { print } from "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Line,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

import { Axes } from "./Axes";

const RADIANS = 2 * Math.PI;
const PERIOD: number = 5;
const MS_IN_S: number = 1000;

let artboard = new SVG("artboard");

let dots: Circle[] = [];

export let main = async () => {
    let g = new Group();

    let axes = new Axes(100, 100);
    g.add(axes.getShapes());

    let i = 0;
    let count = 10;
    while (i < count) {
        let percent = (i + 1) / count;
        let time = Date.now() / MS_IN_S;
        let periodPercent = time % PERIOD / PERIOD;
        let angle = percent * RADIANS;
        let angleT = periodPercent * RADIANS;
        let r = percent * axes.width / count / 2;
        let cx = axes.getMinX() + axes.width * percent;
        let cy = Math.sin(angle + angleT) * 40;
        let c = new Circle(r, cx, cy);
        dots[dots.length] = c;
        g.add(c);
        i++;
    }
    
    artboard.render(g);

    
};

setInterval(main, 20);