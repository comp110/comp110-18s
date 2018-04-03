import { Color, Circle, Stroke } from "introcs/graphics";

const LIT = new Color(1.0, 1.0, 1.0);
const UNLIT = new Color(0.3, 0.3, 0.3);

export class Lite extends Circle {

    on: boolean = false;
    timer: number = 0;

    constructor(radius: number, cx: number, cy: number) {
        super(radius, cx, cy);
        this.fill = UNLIT;
        this.stroke = Stroke.NONE;
    }

    onclick = (e: MouseEvent): void => {
        this.on = !this.on;
        this.timer = 60;
    }

    update = (): void => {
        if (this.on) {
            this.fill = LIT;

            if (this.timer > 0) {
                this.r = this.timer / 60 * 10;
                this.timer--;
            } else {
                this.on = false;
                this.r = 10;
            }

        } else {
            this.fill = UNLIT;
        }
    }

}