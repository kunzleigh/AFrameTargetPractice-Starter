AFRAME.registerComponent('enemy', {
    schema: {
        name: { default: 'enemy_target' },
        color: { default: '#fff' },
        scale: { default: 1 },
    },

    /**
     * Perform enemy component initialization
     */
    init: function () {
        // TODO
    },

    /**
     * Handle enemy collision with the bullet.
     * Directly called from bullet component
     */
    collided: function () {
        // TODO
    },

    /**
     * Handle enemy death
     */
    die: function () {
        // TODO
    },

    /**
     * Reset an enemy. Essentially a "revive function".
     * We will restore the mesh's material, opacity and adjust relavant flags
     */
    reset: function () {
        // TODO
    },

    /**
     * Lifecycle hook invoked on each rendering of the frame
     */
    tick: function (time, delta) {
        if (!this.alive) {
            return;
        }
        if (!this.exploding) {
            // TODO: Make the droid to look the headset
        } else {
            if (!this.explodingTime) {
                this.explodingTime = time;
            }
            
            // Computation for out-easing (So that the scale adjustment plays fast initially, but slows down towards the end)
            var t0 = (time - this.explodingTime) / this.explodingDuration;
            var scale = this.scale + t0 * (2 - t0); 

            var mesh = this.el.getObject3D('mesh');
            mesh.scale.set(scale, scale, scale);
            mesh.material.opacity = Math.max(0, 1 - t0 * 2.5);

            if (t0 >= 1) {
                this.die();
            }
        }
    }
});
