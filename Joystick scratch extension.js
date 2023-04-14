(function(ext) {

    // Joystick class
    class Joystick {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.knobX = x;
            this.knobY = y;
            this.direction = 0;
            this.distance = 0;
        }

        update(x, y) {
            const deltaX = x - this.x;
            const deltaY = y - this.y;
            this.distance = Math.min(1, Math.sqrt(deltaX * deltaX + deltaY * deltaY) / this.radius);
            this.direction = (Math.atan2(deltaY, deltaX) * 180 / Math.PI + 360) % 360;

            // Update knob position
            this.knobX = x;
            this.knobY = y;
            const knobDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (knobDistance > this.radius) {
                const scale = this.radius / knobDistance;
                this.knobX = this.x + deltaX * scale;
                this.knobY = this.y + deltaY * scale;
            }
        }

        reset() {
            this.knobX = this.x;
            this.knobY = this.y;
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
        ext.penCircle(joystick.x, joystick.y, joystick.radius);
        ext.penUp();
        ext.penCircle(joystick.x, joystick.y, 5);
    };

    ext.getJoystickDistance = function() {
        return joystick.distance;
    };

    ext.getJoystickX = function() {
        return joystick.knobX;
    };

    ext.getJoystickY = function() {
        return joystick.knobY;
    };

    ext.getJoystickDirection = function() {
        return joystick.direction;
    };

    ext.resetJoystick = function() {
        joystick.reset();
        ext.penClear();
        ext.penColor('black');
        ext.penSize(2);
        ext.penDown();
        ext.penCircle(joystick.x, joystick.y, joystick.radius);
        ext.penUp();
        ext.penCircle(joystick.x, joystick.y, 5);
    };

    // Update joystick position based on mouse movement
    document.addEventListener('mousemove', function(event) {
        joystick.update(event.clientX, event.clientY);
    });

    // Extension descriptor
    var descriptor = {
        blocks: [
            [' ', 'Pen down', 'penDown'],
            [' ', 'Pen up', 'penUp'],
            [' ', 'Set pen color to %s', 'penColor', 'black'],
            [' ', 'Set pen size to %s', 'penSize', 2],
            [' ', 'Stamp pen', 'penStamp'],
            [' ', 'Clear pen', 'penClear'],
            [' ', 'Create joystick at x: %n y: %n with radius: %n', 'createJoystick', 100, 100, 50],
            ['r', 'Joystick distance', 'getJoystickDistance'],
            ['r', 'Joystick X', 'getJoystickX'],
            ['r', 'Joystick Y', 'getJoystickY'],
            ['r', 'Joystick direction', 'getJoystickDirection'],
            [' ', 'Reset joystick', 'resetJoystick'],
        ],
        url: 'https://www.example.com/scratch-joystick-extension', // Replace with your extension URL
        displayName: 'Joystick Extension'
    };

    // Register the extension
    ScratchExtensions.register('joystick', descriptor, ext);
})(window.ScratchExtensions || (window.ScratchExtensions = {}));

