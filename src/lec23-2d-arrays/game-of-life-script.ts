import { GameOfLife } from "./gol-model";
import { GameOfLifeView } from "./gol-view";
import { GameOfLifeController } from "./gol-controller";

const ROWS = 13;
const COLS = 13;

function main(): void {
    let model = new GameOfLife(ROWS, COLS);
    let view = new GameOfLifeView(model);
    let controller = new GameOfLifeController(model, view);
    view.update();
}

main();