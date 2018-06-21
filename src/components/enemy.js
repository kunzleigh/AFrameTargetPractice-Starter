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
        this.alive = true;
        this.definition = SP.ENEMIES[this.data.name].definition;
        this.definition.init.call(this);
        var comp = SP.ENEMIES[this.data.name].components.enemy;
        this.color = comp.color;
        this.scale = comp.scale;

        this.exploding = false;
        this.explodingDuration = 500 + Math.floor(Math.random() * 300);
    },

    /**
     * Handle enemy collision with the bullet.
     * Directly called from bullet component
     */
    collided: function () {
        if (this.exploding) {
            return;
        }

        this.exploding = true;

        var mesh = this.el.getObject3D('mesh');
        // Store the current material of the object.
        // We're going to restore the material on resetting the enemy
        mesh.normalMaterial = mesh.material;
        mesh.material = new THREE.MeshBasicMaterial({ color: this.color, transparent: true });

        this.system.activeEnemies.splice(this.system.activeEnemies.indexOf(this.el), 1);
    },

    /**
     * Handle enemy death
     */
    die: function () {
        this.alive = false;
        if (this.data.name !== "enemy_start") {
            // Don't reset the enemy entity if it was a starting enemy (we don't want it to appear again)
            this.reset();
        }
        this.system.onEnemyDeath(this.data.name, this.el);
    },

    /**
     * Reset an enemy. Essentially a "revive function".
     * We will restore the mesh's material, opacity and adjust relavant flags
     */
    reset: function () {
        var mesh = this.el.getObject3D('mesh');
        if (mesh) {
            mesh.material.opacity = 1;
            mesh.scale.set(this.scale, this.scale, this.scale);
            mesh.material = mesh.normalMaterial;
        }

        this.el.setAttribute('scale', '0.05 0.05 0.05');
        this.explodingTime = undefined;

        this.alive = true;
        this.exploding = false;
        this.definition.reset.call(this);
    },

    /**
     * Lifecycle hook invoked on each rendering of the frame
     */
    tick: function (time, delta) {
        if (!this.alive) {
            return;
        }
        if (!this.exploding) {
            // Make the droid to look the headset
            var head = this.el.sceneEl.camera.el.components['look-controls'].dolly.position.clone();
            this.el.object3D.lookAt(head);
        } else {
            if (!this.explodingTime) {
                this.explodingTime = time;
            }
            var t0 = (time - this.explodingTime) / this.explodingDuration;

            var scale = this.scale + t0 * (2 - t0); //out easing

            var mesh = this.el.getObject3D('mesh');
            mesh.scale.set(scale, scale, scale);
            mesh.material.opacity = Math.max(0, 1 - t0 * 2.5);
            if (t0 >= 1) {
                this.die();
            }
        }
    }
});
