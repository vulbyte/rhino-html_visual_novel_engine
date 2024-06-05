const { default: config } = await import(
    "../config.json", { with: { type: "json" } }
);

export function ConsolePlus(input) {
    if (config.developer.debug_enabled == false) {
        return;
    }

    let log = {
        logType: "LOG",
        textColor: "#ffffffff",
        bgColor: "#ffffff00",
    }

    if (!Array.isArray(input)) {
        input = ["", input];
    }
    else {
        input[0] = input[0].toLowerCase();
    }

    switch (input[0]) {
        case ("o"):
        case ("out"):
        case ("output"):
        case ("op"):
        case ("f"):
        case ("flag"):
            log.logType = "FLAG";
            log.bgColor = "#0000ff";
            break;

        case ("l"):
        case ("load"):
        case ("loaded"):
        case ("loading"):
            log.logType = "LOAD";
            log.bgColor = "#007799";
            log.textColor = "white";
            break;

        case ("w"):
        case ("war"):
        case ("warn"):
        case ("warning"):
            log.logType = "WARNING";
            log.bgColor = "yellow";
            log.textColor = "black";
            break;

        case ("e"):
        case ("err"):
        case ("error"):
        case ("errors"):
            log.logType = "ERROR";
            log.bgColor = "red";
            log.textColor = "white";
            break;

        default:
            break;
    }

    console.log(
        `%c [ ${log.logType} ]: ${input[1]} `,
        `background: ${log.bgColor}; color: ${log.textColor};`
    );

    return;
};

