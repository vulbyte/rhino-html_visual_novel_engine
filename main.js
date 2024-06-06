//entrypoint for the whole file
import { ConsolePlus } from "./modules/ConsolePlus.js";
import { TestAll } from "./tests/TEST-MASTER.js";

const { default: config } = await import(
    "./config.json", { with: { type: "json" } }
);

// testing?
// {{{1
if (config.developer.tests_enabled == true) {
    if (TestAll() == 0) {
        console.log("[ TEST RESULTS ]: TESTS FAILED, BEHAVIOR MAY BE UNEXPECTED ");
    }
    else {
        ConsolePlus("[ TEST RESULTS ]: TESTS PASSED ");
    }
}
// }}}1


ConsolePlus(["f", "PROGRAM STARTING"]);

//import { InitRhinoVne } from './modules/InitRhinoVne.js';
import { InitRhinoVne } from './modules/InitRhinoVne.js'
InitRhinoVne();

ConsolePlus(['w', "END OF THE SCRIPT"]);
