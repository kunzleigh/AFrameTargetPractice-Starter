PEWVR.currentScore = {
    name: '',
    points: 0,
    time: 0,
    shoots: 0,
    validShoot: 0
};

AFRAME.registerComponent('gamestate', {
    schema: {
        // Enemy count in current scene
        numEnemies: { default: 0 },
        // Sequence count left in current wave 
        numSequences: { default: 0 },
        // Number of enemies killed
        points: { default: 0 },
        // Enemy kill count required to win the game
        numEnemiesToWin: { default: 100 },
        // Current state of the game
        state: { default: 'STATE_INIT', oneOf: ['STATE_INIT', 'STATE_PLAYING', 'STATE_GAME_WIN'] },
        // Current wave
        wave: { default: 0 },
        // Current sequence of the wave (Ex: Wave 1-X)
        waveSequence: { default: 0 }
    },


    /**
     * Lifecycle hook invoked on initialization of the component
     * 
     * Perform the following tasks:
     * 
     * Handle various events emitted from other systems (enemy system for example)
     *  start-game: Set the current state to STATE_PLAYING
     *  enemy-spawn: Increment the number of enemies available in current scene
     *  wave-created: Record # of sequences available in the current wave
     *  enemy-death: Check if we need to advance in our wave or wave sequence. Also check if we need to end the game.
     */

    init: function () {
        // TODO

        // Register a handler for the event
        function registerHandler(event, handler) {
            el.addEventListener(event, function (param) {
                var newState = handler(AFRAME.utils.extend({}, state), param);
                publishState(event, newState);
            });
        }

        // Emit an event with the newly modified state.
        // Various systems will listen to this `gamestate-changed` event and handle it accordingly.
        function publishState(event, newState) {
            var oldState = AFRAME.utils.extend({}, state);
            el.setAttribute('gamestate', newState);
            state = newState;
            el.emit('gamestate-changed', {
                event: event,
                diff: AFRAME.utils.diff(oldState, newState),
                state: newState
            });
        }
    }
});
