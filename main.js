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
        console.log("[ KILLING PROCESS]: TESTS FAILED ");
        exit();
    }
}
// }}}1


ConsolePlus(["f", "PROGRAM STARTING"]);

ConsolePlus(['w', "END OF THE SCRIPT"]);
