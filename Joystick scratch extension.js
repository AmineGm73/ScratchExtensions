(function (ext) {
  // Define the joystick class
  class Joystick {
    constructor(x, y, radius) {
      this.x = x; // X coordinate of the joystick
      this.y = y; // Y coordinate of the joystick
      this.radius = radius; // Radius of the joystick
      this.direction = 0; // Direction of the joystick in degrees (0 to 360)
      this.distance = 0; // Distance of the joystick from the center (0 to 1)
    }

    update(x, y) {
      // Update the joystick values based on the current touch/mouse position
      const deltaX = x - this.x;
      const deltaY = y - this.y;
      this.distance = Math.min(1, Math.sqrt(deltaX * deltaX + deltaY * deltaY) / this.radius);
      this.direction = (Math.atan2(deltaY, deltaX) * 180 / Math.PI + 360) % 360;
    }

    reset() {
      // Reset the joystick values
      this.distance = 0;
      this.direction = 0;
    }
  }

  // Create a new instance of the Joystick class
  const joystick = new Joystick(100, 100, 50); // Example: Joystick centered at (100, 100) with radius of 50 pixels

  // Define the extension blocks
  ext._getStatus = function () {
    return { status: 2, msg: 'Ready' }; // Return the status of the extension
  };

  ext.createJoystick = function (x, y, radius) {
    joystick.x = x; // Set the x coordinate of the joystick
    joystick.y = y; // Set the y coordinate of the joystick
    joystick.radius = radius; // Set the radius of the joystick
    ext.penClear(); // Clear the pen to remove any previous joystick drawings
    ext.penColor('#000000'); // Set the pen color to black
    ext.penSize(2); // Set the pen size to 2 pixels
    ext.penDown(); // Put the pen down to start drawing
    ext.penStamp(); // Stamp the current sprite's image at the joystick position
  };

  ext.getJoystickDistance = function () {
    return joystick.distance; // Return the distance of the joystick from the center
  };

  ext.getJoystickX = function () {
    return joystick.x; // Return the x coordinate of the joystick
  };

  ext.getJoystickY = function () {
    return joystick.y; // Return the y coordinate of the joystick
  };

  ext.getJoystickDirection = function () {
    return joystick.direction; // Return the direction of the joystick
  };

  ext.resetJoystick = function () {
    joystick.reset(); // Reset the joystick values
    ext.penClear(); // Clear the pen to remove the joystick drawing
  };

  // Define the extension descriptors
  var descriptor = {
    blocks: [
      [' ', 'create joystick at x: %n y: %n with radius: %n', 'createJoystick', 100, 100, 50],
      ['r', 'joystick distance', 'getJoystickDistance'],
      ['r', 'joystick x', 'getJoystickX'],
      ['r', 'joystick y', 'getJoystickY'],
      ['r', 'joystick direction', 'getJoystickDirection'],
      [' ', 'resetjoystick', 'resetJoystick']
    ],
    url: 'https://aminegm73.github.io/ScratchExtensions/Joystick%20scratch%20extension.js' // Replace with the URL of your extension's JavaScript file
  };

  // Register the extension with Scratch
  ScratchExtensions.register('Joystick', descriptor, ext);
})({});

