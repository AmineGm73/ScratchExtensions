(function(ext) {
    // Define a custom block called "get atan2" that takes two inputs
    ext.getAtan2 = function(y, x) {
        return Math.atan2(y, x) * 180 / Math.PI;
    };

    // Define a custom block called "lerp" that takes three inputs
    ext.lerp = function(a, b, t) {
        return a + (b - a) * t;
    };

    // Describe the extension's blocks, menus, and other properties
    var descriptor = {
        // Define the extension's ID and name
        id: 'mathExtension',
        name: 'Math Extension',

        // Define the extension's input types
        blocks: [
            // Define the "get atan2" block with two number inputs
            ['r', 'get atan2 of y: %n x: %n', 'getAtan2', 0, 0],

            // Define the "lerp" block with three number inputs
            ['r', 'lerp from %n to %n with t %n', 'lerp', 0, 1, 0.5]
        ]
    };

    // Register the extension with Scratch
    ScratchExtensions.register('mathExtension', descriptor, ext);
})({});
