import { ConsolePlus } from './ConsolePlus.js';

const { default: config } = await import(
    "../config.json", { with: { type: "json" } }
);


export function InitRhinoVne() {
    const d = document;

    let body;

    //make sure that the element exists, if not handle
    if (config.init.isPreplaced == true) {
        if (d.getElementById('rhinoVne') == null) {
            if (!confirm(`there's no 'rhinoVne', would you like to create a new one?`)) {
                return;
            }
            else {
                return;
            }
        }
        else {
            return;
        }
    }

    //this is the handle part
    try {
        body = d.querySelector("body");
    }
    catch (err) {
        ConsolePlus(["e", err]);
        let newBody = d.createElement("body");
        d.querySelector('div').appendChild(newBody);

        body = d.querySelector("body");
    }



    let div = d.createElement("div");
    body.appendChild(div);

    let rhinoVne = d.createElement("canvas");
    rhinoVne.setAttribute("id", "rhinoVne");

    div.appendChild(rhinoVne);
    div.setAttribute("id", "rhinoVneContainer");
    div.style.backgroundColor = "#333333";
    div.style.margin = "auto";
    div.style.display = "flex";
    div.style.justifyContent = "center";


    return;
}
