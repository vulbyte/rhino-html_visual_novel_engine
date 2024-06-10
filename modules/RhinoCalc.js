import { ConsolePlus } from "./ConsolePlus.js";

const { default: config } = await import(
    '../config.json', { with: { type: "json" } }
);

//TODO: create click event triggers for buttons/menus that can easily be called. this event should be created as a rect, then simply mapped with a dictionary, eacy canvas clear clearing the dictionary


export class RhinoCalc {

    rhinoVne;
    rhinoContext;
    rhinoRect;

    constructor() {
        try {
            this.rhinoVne = document.getElementById('rhinoVne');
            this.rhinoContext = rhinoVne.getContext('2d');
            this.rhinoRect = rhinoVne.getBoundingClientRect();
        }
        catch (err) {
            ConsolePlus(["e", err]);
        }
    }

    //TODO:
    findWidth(percent) { //returns an absolute float
        return ((this.rhinoRect.width * (percent / 100)));
    };
    //TODO:
    findHeight(percent) { // returns an absolute float
        return ((this.rhinoVne.height * (percent / 100)));
    };
    //TODO:
    findCenter() {
        return (findWidth() / 2);
    };

    //TODO:
    /**
    * used to place an object aligned left.
    * ex: fillText("example_text", RhinoCalc.placeLeft)
    * @param {number} percent
    */
    placeLeft(percent) { //to be used with an x placement, ie: 

    };

    /**
     * Draws a rounded rectangle with background color.
     * @param {number} upperLeftX - The x-coordinate of the upper left corner of the rectangle.
     * @param {number} upperLeftY - The y-coordinate of the upper left corner of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     * @param {string} bgColor - The background color of the rectangle.
     * @param {number} borderRadius - The border radius for the rounded corners.
     */
    placeRect(
        upperLeftX,
        upperLeftY,
        width,
        height,
        bgColor,
        borderRadius = "20px" // Default border radius
    ) {
        ConsolePlus("placing rect");
        const vne = this.rhinoContext;

        // Set the fill color for the rectangle
        vne.fillStyle = bgColor;

        // Draw the rounded rectangle
        vne.beginPath();
        vne.roundRect(upperLeftX, upperLeftY, width, height, borderRadius);
        vne.fill();

        // Optionally, draw the border for the rectangle
        if (config.styling.default_line_width > 0) {
            vne.lineWidth = config.styling.default_line_width;
            vne.strokeStyle = config.styling.default_stroke_color;
            vne.stroke();
        }
        ConsolePlus("finished placing text");
    }

    placeCenteredText(
        text = "noTextGiven",
        textColor = "#ff00ff",
        textSize = "10px",
        textYPos = "0",
        bg_color = "#000000", // assuming bg_color is a valid hex color
        bg_padding = 10, // assuming bg_padding is a number
        borderRadius = 20 // border radius for rounded corners
    ) {
        if (!String(textColor).includes("#")) {
            textColor += "#" + textColor;
        }

        ConsolePlus("adding text");

        let vne = rhinoVne.getContext('2d');
        vne.font = `${textSize}px ${config.styling.default_font_family}`;
        let textWidth = vne.measureText(text).width;
        let textHeight = parseInt(textSize, 10); // assuming textSize is a valid number in pixels
        let x = (this.rhinoVne.width - textWidth) / 2;
        let y = Number(this.findHeight(textYPos));

        // Calculate background rectangle dimensions and position
        let bgX = x - bg_padding;
        let bgY = y - textHeight - bg_padding;
        let bgWidth = textWidth + 2 * bg_padding;
        let bgHeight = textHeight + 2 * bg_padding;

        // Draw background rounded rectangle
        if (bg_color) {
            this.placeRect(bgX, bgY, bgWidth, bgHeight, bg_color, borderRadius);
        }

        // Draw the text
        vne.fillStyle = textColor;
        vne.fillText(String(text), x, y);

        ConsolePlus("added text");
    };

    //TODO:
    /**
    * used to place an object aligned to the rigth.
    * ex: fillText("example_text", RhinoCalc.placeRight)
    * @param {number} percent
    */
    placeRight(percent) {

    };

};
