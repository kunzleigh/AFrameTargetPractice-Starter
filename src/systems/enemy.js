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
        var self = this;
        var sceneEl = this.sceneEl;

        if (!sceneEl.hasLoaded) {
            sceneEl.addEventListener('loaded', this.init.bind(this));
            return;
        }

        this.poolHelper = new PoolHelper('enemy', SP.ENEMIES, this.sceneEl);

        this.activeEnemies = [];

        sceneEl.addEventListener('gamestate-changed', function (evt) {
            if ('state' in evt.detail.diff) {
                if (evt.detail.state.state === 'STATE_PLAYING') {
                    setTimeout(function () {
                        self.createWave(0);
                    }, 1000);
                }
                else if (evt.detail.state.state === 'STATE_GAME_WIN'
                    || evt.detail.state.state === 'STATE_INIT') {
                    self.reset();
                    return;
                }
            }

            if ('waveSequence' in evt.detail.diff) {
                self.createSequence(evt.detail.state.waveSequence);
            }

            if ('wave' in evt.detail.diff) {
                self.createWave(evt.detail.state.wave);
            }
        });
    },

    /**
     * Retrieves an enemy entity from the pool
     */
    getEnemy: function (name) {
        return this.poolHelper.requestEntity(name);
    },

    /**
     * Enemy Death event handler. Called each time an enemy has been hit by the bullet.
     */
    onEnemyDeath: function (name, entity) {
        if (this.sceneEl.getAttribute('gamestate').state === 'STATE_INIT') {
            this.sceneEl.emit('start-game');
        } else {
            this.poolHelper.returnEntity(name, entity);
            this.sceneEl.emit('enemy-death');
        }
    },

    /**
     * Start a new wave.
     */
    createWave: function (waveNumber) {
        this.currentWave = WAVES[waveNumber];
        this.createSequence(0);
        this.sceneEl.emit('wave-created', { wave: this.currentWave });
    },

    /**
     * Start a sequence in a wave
     */
    createSequence: function (sequenceNumber) {
        var self = this;
        setTimeout(function initFirstSequence() {
            self.currentSequence = sequenceNumber;
            var sequence = self.currentWave.sequences[sequenceNumber];
            sequence.enemies.forEach(function createEnemyFromDef(enemyDef) {
                self.createEnemies(enemyDef);
            });
        }, 100);
    },

    /**
     * Create a new enemy in the scene
     */
    createEnemy: function (enemyType, enemyDefinition, timeOffset) {
        var self = this;
        var entity = this.getEnemy(enemyType);

        entity.setAttribute('curve-movement', {
            type: enemyDefinition.movement,
            loopStart: enemyDefinition.loopStart || 1,
            timeOffset: timeOffset || 0
        });

        function activateEnemy(entity) {
            entity.setAttribute('visible', true);
            entity.components['curve-movement'].addPoints(enemyDefinition.points);
            entity.play();
            self.activeEnemies.push(entity);
            self.sceneEl.emit('enemy-spawn', { enemy: entity });
        }

        if (timeOffset) {
            if (timeOffset < 0) {
                entity.setAttribute('visible', false);
                setTimeout(function () {
                    activateEnemy(entity);
                }, -timeOffset);
            } else {

            }
        } else {
            activateEnemy(entity);
        }
    },

    /**
     * Create multiple enemies in the scene given an array of enemy definitions.
     */
    createEnemies: function (enemyDefinition) {
        if (Array.isArray(enemyDefinition.type)) {
            for (var i = 0; i < enemyDefinition.type.length; i++) {
                var type = enemyDefinition.type[i];
                var timeOffset = (enemyDefinition.enemyTimeOffset || 0) * i;
                this.createEnemy(type, enemyDefinition, timeOffset);
            }
        } else {
            this.createEnemy(enemyDefinition.type, enemyDefinition);
        }
    },

    /**
     * Returns all active enemies back into the pool
     */
    reset: function (entity) {
        var self = this;
        this.activeEnemies.forEach(function (enemy) {
            self.poolHelper.returnEntity(enemy.getAttribute('enemy').name, enemy);
        });
    }
});
