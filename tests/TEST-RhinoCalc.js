import { RhinoCalc } from '../modules/RhinoCalc.js';
import { ConsolePlus } from '../modules/ConsolePlus.js';

export function TestRhinoCalc() {
    const test = new RhinoCalc;
    ConsolePlus(["test", ("width position: ", test.findWidth(10))]);
    ConsolePlus(["test", ("width position: ", test.findWidth(75))]);
    ConsolePlus(["test", ("width position: ", test.findWidth(50))]);
    ConsolePlus(["test", ("width position: ", test.findWidth(30))]);
    ConsolePlus(["test", ("width position: ", test.findWidth(12))]);
};
