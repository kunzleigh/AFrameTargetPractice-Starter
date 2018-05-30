AFRAME.registerComponent('bullet', {
    schema: {
        name: { default: '' },
        direction: { type: 'vec3' },
        maxSpeed: { default: 1.0 },
        initialSpeed: { default: 0.1 },
        position: { type: 'vec3' },
        acceleration: { default: 0.4 },
        color: { default: '#fff' }
    },

    /**
     * Lifecycle hook invoked on initialization of the component
     * 
     * Perform the following tasks:
     * 
     * Get a reference of the starting enemy
     * Get a reference of the registered bullet
     * Call the initialization method on the registered bullet
     * Initialize empty vectors (current bullet's direction, temporary direction/position vectors for moving the bullet)
     */
    init: function () {
        // TODO
    },

    /**
     * Lifecycle hook invoked whenever a property of the bullet object has been updated
     * 
     * Perform the following tasks:
     * 
     * Update the current bullet's direction, acceleration, speed and starting position based on the updated properties
     * 
     * @param: oldData: Reference to the old bullet data (unused here)
     */
    update: function (oldData) {
        // TODO
    },

    /**
     * Lifecycle hook invoked called on each rendering of the frame
     * 
     * Perform the following tasks:
     * 
     * Align the bullet 3d object's direction
     * Calculate new speed
     * Set bullet's position based on new speed
     * Reset bullet if it's lost in the sky
     * Check & handle collision - against starting enemy and active enemies
     * 
     * @param time: Current timestamp in milliseconds (unused here)
     * @param delta: Time difference since the last frame's rendering in millliseconds
     */
    tick: function tick(time, delta) {
        // TODO
    },

    /**
     * method to perform a collision check on the bullet against an enemy.
     * If the bullet is within the enemy radius + bulletRadius, the bullet has
     * collided with the enemy.
     * 
     * @param enemy: Enemy entity
     * @param bulletPosition: Position of the bullet (Vector3) 
     * @returns True if collision occured, false otherwise
     */
    hasCollidedWithBullet: function (enemy, bulletPosition) {
        // TODO
        return false;
    },

    /**
     * Handler for bullet hitting an enemy. Creates an explosion and calls reset bullet method
     * @param enemyEntity Enemy Entity
     */
    hitObject: function (enemyEntity) {
        // TODO
    },

    /**
     * Resets the bullet's properties and returns the bullet to the pool
     */
    resetBullet: function () {
        // TODO
    },
});
