var PoolHelper = require('../lib/poolhelper.js');

/**
 * Global Key-value store for registered enemies
 */
SP.ENEMIES = {};

/**
 * Registers an enemy into the enemy system.
 * In our case, we will need to register two types of enemies - start enemy, target enemy
 * @param {*} name Name of the enemy being registered
 * @param {*} data Data associated with the enemy
 * @param {*} definition Collection of methods that can be ran with the specific enemy being registered
 */
SP.registerEnemy = function (name, data, definition) {
    if (SP.ENEMIES[name]) {
        throw new Error('The enemy `' + name + '` has been already registered. ' +
            'Check that you are not loading two versions of the same enemy ' +
            'or two different enemies of the same name.');
    }

    SP.ENEMIES[name] = {
        poolSize: data.poolSize,
        components: data.components,
        definition: definition,
        name: name
    };

    console.info('Enemy registered ', name);
};

AFRAME.registerSystem('enemy', {
    schema: {
        wave: { default: 0 }
    },

    /**
     * Perform enemy system initialization
     */
    init: function () {
        // TODO
    },

    /**
     * Retrieves an enemy entity from the pool
     */
    getEnemy: function (name) {
        // TODO
    },

    /**
     * Enemy Death event handler. Called each time an enemy has been hit by the bullet.
     */
    onEnemyDeath: function (name, entity) {
        // Emit relavant events (such as starting the game, advancing to new wave)
        // TODO
    },

    /**
     * Start a new wave.
     */
    createWave: function (waveNumber) {
        // TODO
    },

    /**
     * Start a sequence in a wave
     */
    createSequence: function (sequenceNumber) {
        // TODO
    },

    /**
     * Create a new enemy in the scene
     */
    createEnemy: function (enemyType, enemyDefinition, timeOffset) {
        // TODO
    },

    /**
     * Create multiple enemies in the scene given an array of enemy definitions.
     */
    createEnemies: function (enemyDefinition) {
        // TODO
    },

    /**
     * Returns all active enemies back into the pool
     */
    reset: function (entity) {
        // TODO
    }
});
