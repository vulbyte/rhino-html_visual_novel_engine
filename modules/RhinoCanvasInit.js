const { default: config } = await import(
    "../config.json", { with: { type: "jason" } }
);

export function RhinoCanvasInit() {
    if (config.rhino_canvaas.isPreplace == true) {

    }
}
