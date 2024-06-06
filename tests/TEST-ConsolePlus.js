// test the consoleplus command

import { ConsolePlus } from "../modules/ConsolePlus.js";

export function TestConsolePlus() {
    const tests = [ //test are stored in [result] : [target] pairs
        {
            result: ConsolePlus(""),
            target: (`%c [ LOG ]:  background: #ffffff00; color: #ffffffff;`), //this needs 2 spaces because for styling there's a " " after the []:
        },
        {
            result: ConsolePlus(["l", "main.js"]),
            target: (`%c [ LOAD ]: main.js background: #007799ff; color: #ffffffff;`),
        },
        {
            result: ConsolePlus(["f", (2 * 3)]),
            target: (`%c [ FLAG ]: 6 background: #0000ff00; color: #ffffffff;`),
        },
        //        { I SHOULD GET THIS WORKING AT SOME POINT BUT IT'S NOT NEEDED AS IT SHOULD THROW A JIT ERROR INSTEAD, thus being out of my domain
        //            result: (() => {
        //                try { ConsolePlus(fakeFunction()) } catch (err) { return err }
        //            })(),
        //            target: (`\nReferenceError: fakeFunction is not defined
        //    at TEST-ConsolePlus.js:21:23
        //    at TestConsolePlus (TEST-ConsolePlus.js:22:15)
        //    at TestAll (TEST-MASTER.js:7:9)
        //    at main.js:11:9`),
        //        },
    ];

    console.log(`%c [ TESTING ]: ConsolePLUS `, `background: #ffff00; color: #000000; `)
    for (let i = 0; i < tests.length; ++i) {
        if (tests[i].result != tests[i].target) {
            console.log(
                `%c [ TEST ]: FAIL `, `background: #ff0000; color: #ffffffff; `, "\n",
                "got:      ", tests[i].result, "\n",
                "expected: ", tests[i].target, "\n"
            );

            return 0;
        }

        console.log(`%c [ TEST RESULT ]: PASS `, `background: #00ff00; color: #000000ff; `);
        continue;
    }
    return 1;
}
