import { ConsolePlus } from './ConsolePlus.js';

import { RhinoCalc } from './RhinoCalc.js';

//this is going to be the entry point, which will load what to do from where
const { default: GLOBAL_STATE } = await import(
    '../GLOBAL_STATE.json', { with: { type: "json" } }
);

const { default: config } = await import(
    '../config.json', { with: { type: "json" } }
);

const d = document;

export async function MainMenu() {
    const rhinoCalc = new RhinoCalc();

    let vne;
    let rhinoVne;

    //verify existance
    try {
        rhinoVne = d.getElementById('rhinoVne');
        vne = rhinoVne.getContext('2d');
    }
    catch (err) { //exit if rhinoVne doesn't appear
        GLOBAL_STATE.current_state = "error";
        ConsolePlus(["e", "rhinoVne doesn't not exist when being access from 'main_menu.js'. exiting from unrecoverable state"]);
        return;
    }

    vne.clearRect(0, 0, rhinoVne.width, rhinoVne.height);



    rhinoCalc.placeCenteredText(
        config.project_info.title,
        "#ff0051",
        "60",
        "20",
        "#330033"
    );

    //rhinoCalc.placeRect(50, 50, 200, 100, '#ff0000');

    ConsolePlus("rendering menu")
}
