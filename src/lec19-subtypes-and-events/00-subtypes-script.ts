import {
    SVG,
    Group
} from "introcs/graphics";

/* Notice: We are importing the Lite class from ./Lites.ts */
import { Lite } from "./Lites";

let main = async () => {
    let artboard = new SVG("artboard");
    artboard.autoScale = false;
    let scene = new Group();
    
    // TODO: Add a Lite

    artboard.render(scene);
};

main();