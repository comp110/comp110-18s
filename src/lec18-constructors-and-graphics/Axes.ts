import {
    Group,
    Line,
    Stroke,
    Color
} from "introcs/graphics";

export class Axes {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getShapes(): Group {
        let group: Group = new Group();
        group.add(new Line(0, -100, 0, 100));
        group.add(new Line(-100, 0, 100, 0));
        return group;
    }
}