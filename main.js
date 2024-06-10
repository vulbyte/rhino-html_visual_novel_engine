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

// create new canvas or connect to it
import { InitRhinoVne } from './modules/InitRhinoVne.js'
InitRhinoVne();

import { ConfigureRhinoVne } from './modules/ConfigureRhinoVne.js'
ConfigureRhinoVne();

ConsolePlus("initialization finished");

ConsolePlus(["f", "PROGRAM STARTING"]);

import { GameStateManager } from './modules/gamestateManager.js'
await GameStateManager();

ConsolePlus(['w', "END OF THE SCRIPT"]);
