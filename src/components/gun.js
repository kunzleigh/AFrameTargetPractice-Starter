/**
 * Spawn bullets on an event.
 */
var MobileVRControls = require('../lib/mobile-vr-controls.js');

AFRAME.registerComponent('gun', {
    schema: {
        direction: { type: 'vec3' }, // Direction which the bullets will be fired in
    },

    /**
     * Lifecycle hook invoked on initialization of the component
     * 
     * Perform the following tasks:
     * 
     * Initialize "coolingDown" variable
     * Instantiate a new MobileVRControls object
     * Listen to Space / Mobile Window Click / Mobile VR mode click events and shoot the bullet
     * 
     */
    init: function () {
        // Instantiated gun object based on the schema
        var data = this.data;
        // Reference to the current object (so that we can access it in anonymous function)
        var self = this;

        this.mobileVRControls = new MobileVRControls();
        this.coolingDown = false;  // Limit fire rate.

        // Add keyboard listener.
        window.addEventListener('keydown', function (evt) {
            if (evt.code === 'Space' || evt.keyCode === '32') { 
                self.shoot();
            }
        });

        // Add two separate listeners for mobile - window click and VR click
        if (AFRAME.utils.device.isMobile()) {
            window.addEventListener('click', function (evt) {
                self.shoot();
            });
            this.mobileVRControls.addVRClickListener(function () {
                self.shoot();
            });
        }
    },

    shoot: (function () {
        // Initialize empty 3d vectors / quaternion to use
        var direction = new THREE.Vector3();
        var position = new THREE.Vector3();
        var quaternion = new THREE.Quaternion();
        var scale = new THREE.Vector3();
        var translation = new THREE.Vector3();

        return function () {
            // TODO
        };
    })()
});
