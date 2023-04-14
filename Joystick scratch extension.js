(function(ext) {

    // Joystick class
    class Joystick {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.direction = 0;
            this.distance = 0;
        }

        update(x, y) {
            const deltaX = x - this.x;
            const deltaY = y - this.y;
            this.distance = Math.min(1, Math.sqrt(deltaX * deltaX + deltaY * deltaY) / this.radius);
            this.direction = (Math.atan2(deltaY, deltaX) * 180 / Math.PI + 360) % 360;
        }

        reset() {
            this.distance = 0;
            this.direction = 0;
        }
    }

    // Create a new instance of the Joystick class
    const joystick = new Joystick(100, 100, 50); // Example: Joystick centered at (100, 100) with radius of 50 pixels

    // Pen extension blocks for drawing graphics
    ext.penDown = function() {
        window.penDown();
    };

    ext.penUp = function() {
        window.penUp();
    };

    ext.penColor = function(color) {
        window.penColor(color);
    };

    ext.penSize = function(size) {
        window.penSize(size);
    };

    ext.penStamp = function() {
        window.penStamp();
    };

    ext.penClear = function() {
        window.penClear();
    };

    // Extension blocks for joystick functionality
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.createJoystick = function(x, y, radius) {
        joystick.x = x;
        joystick.y = y;
        joystick.radius = radius;
        ext.penClear();
        ext.penColor('black');
        ext.penSize(2);
        ext.penDown();
        ext.penStamp();
    };

    ext.getJoystickDistance = function() {
        return joystick.distance;
    };

    ext.getJoystickX = function() {
        return joystick.x;
    };

    ext.getJoystickY = function() {
        return joystick.y;
    };

    ext.getJoystickDirection = function() {
        return joystick.direction;
    };

    ext.resetJoystick = function() {
        joystick.reset();
        ext.penClear();
    };

    // Extension descriptor
    var descriptor = {
        blocks: [
            [' ', 'create joystick at x: %n y: %n with radius: %n', 'createJoystick', 100, 100, 50],
            ['r', 'joystick distance', 'getJoystickDistance'],
            ['r', 'joystick x', 'getJoystickX'],
            ['r', 'joystick y', 'getJoystickY'],
            ['r', 'joystick direction', 'getJoystickDirection'],
            [' ', 'reset joystick', 'resetJoystick']
        ],
        menus: {},
        url: 'https://aminegm73.github.io/ScratchExtensions/Joystick%20scratch%20extension.js' // Replace with the URL of your extension's JavaScript file
    };

    // Register the extension with Scratch
    ScratchExtensions.register('Joystick', descriptor, ext);

})({});
