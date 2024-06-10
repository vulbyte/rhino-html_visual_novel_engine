// this is simply made to be a script to test everything within a file to make sure it's working. if outputs are not expected, then there has been a critical error
// a return of 1 is considered a pass, a return of 0 is a fail

import { TestConsolePlus } from "./TEST-ConsolePlus.js";
import { TestRhinoCalc } from "./TEST-RhinoCalc.js";

export function TestAll() {
    //ConsolePlus
    if (TestConsolePlus() == 0) {
        console.log(`%c [TEST RESULT ]: FAILED `, `background: #ff0000; color: #000000ff; `);
        return 0;
    }
    console.log(`%c [TEST RESULT ]: PASS `, `background: #00ff00; color: #000000ff; `);

    //RhinoCalc 
    //TestRhinoCalc();
}
