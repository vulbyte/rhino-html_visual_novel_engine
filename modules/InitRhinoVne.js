const { default: config } = await import(
    "../config.json", { with: { type: "json" } }
);

export function InitRhinoNve() {
    if (config.rhino_canvaas.isPreplace == false) {
        const d = document;

    }

    try {
        const rhinoVne = d.getElementById("rhinoVne");
    }
    catch (err) {

    }
}
