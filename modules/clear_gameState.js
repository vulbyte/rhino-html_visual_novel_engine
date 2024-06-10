const { default: GLOBAL_STATE } = await import(
    '../GLOBAL_STATE.json', { with: { type: "json" } }
);

export function ClearGamestate() {
    GLOBAL_STATE.current_state = null;
    GLOBAL_STATE.exit_games = true;
    GLOBAL_STATE.canvas.x = "";
    GLOBAL_STATE.canvas.y = "";

    return;
}
