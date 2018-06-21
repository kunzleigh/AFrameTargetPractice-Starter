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
        // TODO
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
