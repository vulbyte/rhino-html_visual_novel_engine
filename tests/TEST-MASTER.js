// this is simply made to be a script to test everything within a file to make sure it's working. if outputs are not expected, then there has been a critical error
// a return of 1 is considered a pass, a return of 0 is a fail

import { TestConsolePlus } from "./TEST-ConsolePlus.js";

export function TestAll() {
    if (TestConsolePlus() == 0) {

    }

}
