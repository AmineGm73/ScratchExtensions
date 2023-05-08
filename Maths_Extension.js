(function (ext) {
    // Extension code will be inserted here
  
    // Arctangent function (atan2)
    ext.atan2 = function (y, x) {
      return Math.atan2(y, x) * (180 / Math.PI);
    };
  
    // Linear interpolation function (lerp)
    ext.lerp = function (start, end, t) {
      return start + t * (end - start);
    };
  
    // Cleanup function when the extension is unloaded
    ext._shutdown = function () {};
  
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function () {
      return { status: 2, msg: 'Ready' };
    };
  
    // Register the extension
    ScratchExtensions.register('Math Extension', ext, { type: 'misc' });
  })({});
  