(function (ext) {
  // Constants
  var DEG_TO_RAD = Math.PI / 180.0;
  var RAD_TO_DEG = 180.0 / Math.PI;

  // Math.atan2: Returns the angle (in degrees) from the X-axis to a point.
  ext.atan2 = function (y, x) {
    return Math.atan2(y, x) * RAD_TO_DEG;
  };

  // Math.lerp: Performs linear interpolation between two values.
  ext.lerp = function (start, end, t) {
    return start + (end - start) * t;
  };

  // Block and block menu descriptions
  var descriptor = {
    blocks: [
      ['r', 'atan2 of y: %n x: %n', 'atan2', 0, 0],
      ['r', 'lerp start: %n end: %n t: %n', 'lerp', 0, 100, 0.5],
    ],
  };

  // Register the extension
  ScratchExtensions.register('Math Extension', descriptor, ext);
})();
