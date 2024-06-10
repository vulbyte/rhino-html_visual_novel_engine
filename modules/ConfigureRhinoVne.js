const { default: config } = await import(
    '../config.json', { with: { type: "json" } }
);

const { default: GLOBAL_STATE } = await import(
    '../GLOBAL_STATE.json', { with: { type: "json" } }
);

import { ConsolePlus } from "./ConsolePlus.js"

export function ConfigureRhinoVne() {
    const d = document;
    let rhinoVne = d.getElementById("rhinoVne");

    if (config.display.resolution.type == "auto") {
        // x
        let width = window.innerWidth * (config.display.auto_defaults.x_margin / 100);
        rhinoVne.width = width;
        ConsolePlus("width applied");
        // y
        let height = window.innerHeight * (config.display.auto_defaults.y_margin / 100);
        rhinoVne.height = height;
        ConsolePlus("height applied");
    }

    return;
}
