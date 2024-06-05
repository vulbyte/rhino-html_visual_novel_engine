//entrypoint for the whole file
import { ConsolePlus } from "./modules/ConsolePlus.js"
//const ConsolePlus = require('./modules/ConsolePlus');

ConsolePlus("PROGRAM STARTING");

ConsolePlus("loading...");
ConsolePlus(["l", "main.js"]);

ConsolePlus(["f", (2 * 3)]);

try {
    fakeFunction();
}
catch (err) {
    ConsolePlus(["e", err]);
}

ConsolePlus(['w', "END OF THE SCRIPT"]);
