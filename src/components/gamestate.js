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
        // Instantiated state object based on the schema
        var state = this.data;

        // Reference to the HTML element
        var el = this.el;

        // Reference to the current object (so that we can access it in an anonymous function)
        var self = this;

        // TODO: Write code for handling 4 events

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
