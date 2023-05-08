(function (ext) {
  // Load external JavaScript file
  var extensionUrl = 'https://aminegm73.github.io/ScratchExtensions/Maths_Extension.js';
  var script = document.createElement('script');
  script.src = extensionUrl;
  document.head.appendChild(script);

  // Cleanup function when the extension is unloaded
  ext._shutdown = function () {
    // Remove the dynamically added script element
    document.head.removeChild(script);
  };

  // Status reporting code
  // Use this to report missing hardware, plugin or unsupported browser
  ext._getStatus = function () {
    return { status: 2, msg: 'Ready' };
  };

  // Register the extension
  ScratchExtensions.register('Math Extension', ext, { type: 'misc' });
})({});
