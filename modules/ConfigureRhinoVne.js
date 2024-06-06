const { default: config } = await import(
    '../config.json', { with: { type: "json" } }
);

import { ConsolePlus } from "./ConsolePlus.js"

export function ConfigureRhinoVne() {
    const d = document;
    let rhinoVne = d.getElementById("rhinoVne");

    if (config.display.resolution.type == "auto") {
        // x
        rhinoVne.width = window.innerWidth * (config.display.auto_defaults.x_margin / 100);
        ConsolePlus("width applied");
        // y
        rhinoVne.height = window.innerHeight * (config.display.auto_defaults.y_margin / 100);
        ConsolePlus("height applied");
    }

    return;
}
