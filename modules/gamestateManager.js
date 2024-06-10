import { MainMenu } from './main_menu.js';
import { ClearGamestate } from './clear_gameState.js';
import { ConsolePlus } from './ConsolePlus.js';

export async function GameStateManager() {
    const { default: GLOBAL_STATE } = await import(
        '../GLOBAL_STATE.json', {
        with: { type: "json" }
    });

    ConsolePlus(["f", "starting gamestate"]);

    //while (GLOBAL_STATE.exit_game == false) {
    let curState = String(GLOBAL_STATE.current_state).toLowerCase();

    switch (curState) { //tolower case to limit scope
        default:
        case ("menu"):
        case ("null"):
        case (""):
            // import { MainMenu } from './main_menu';
            await MainMenu();
            break;
        case ("scene"):
            break;
        case ("transition_scene"):
            break;
        case ("settings"):
            break;
        case ("credits"):
            break;
        case ("error"):
        case ("err"):
        case ("e"):

            break;
    }
    //}

    //wrap up
    ClearGamestate();

    ConsolePlus(['f', "exiting program"])
}
