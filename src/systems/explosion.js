var PoolHelper = require('../lib/poolhelper.js');

SP.EXPLOSIONS = {};

SP.registerExplosion = function (name, data, definition) {
    if (SP.EXPLOSIONS[name]) {
        throw new Error('The explosion `' + name + '` has been already registered. ' +
            'Check that you are not loading two versions of the same explosion ' +
            'or two different enemies of the same name.');
    }

    SP.EXPLOSIONS[name] = {
        poolSize: data.poolSize,
        components: data.components,
        definition: definition,
        name: name
    };

    console.info('Explosion registered ', name);
};

AFRAME.registerSystem('explosion', {
    /**
     * Perform enemy system initialization
     */
    init: function () {
        // TODO
    },

    /**
     * Resets the Explosion System.
     * 
     * Returns all of the active explosions back into the object pool
     */
    reset: function (entity) {
        // TODO
    },

    /**
     * Returns a single active explosion into the pool
     */
    returnToPool: function (name, entity) {
        // TODO
    },

    /**
     * Retrieve an explosion entity from the pool
     */
    getFromPool: function (name) {
        // TODO
    },

    /**
     * Create an explosion in the scene
     */
    createExplosion: function (type, position, color, scale, direction, enemyName) {
        // TODO
    }
});


SP.registerExplosion(
    // name
    'enemy',
    // data
    {
        components: {
            explosion: {
                type: 'enemy',
            },
        },
        poolSize: 10
    },
    // implementation
    {
    }
);
