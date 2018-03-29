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

    getMinX = (): number => {
        return -this.width / 2;
    }

    getMaxX = (): number => {
        return this.height / 2;
    }

    getShapes(): Group {
        let g = new Group();

        // When the total width is this.width, half the x axis should be negative, half positive
        let halfWidth = this.width / 2;
        let xAxis = new Line(-halfWidth, 0, halfWidth, 0);
        g.add(xAxis);
        
        // Same idea as width, total height is this.height, so bisect the y axis about the origin
        let halfHeight = this.height / 2;
        let yAxis = new Line(0, -halfHeight, 0, halfHeight);
        g.add(yAxis);

        return g;
    }
}