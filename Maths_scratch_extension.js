(function(ext) {
    var audio;
    var isPlaying = false;
    
    // Function to play the selected audio file
    ext.playAudio = function(filename) {
        if (audio) {
            audio.pause();
        }
        audio = new Audio(filename);
        audio.play();
        isPlaying = true;
    };
    
    // Function to stop the currently playing audio file
    ext.stopAudio = function() {
        if (audio) {
            audio.pause();
        }
        isPlaying = false;
    };
    
    // Function to check if the audio file is currently playing
    ext.isPlaying = function() {
        return isPlaying;
    };
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'select audio file', 'selectAudio'],
            [' ', 'play selected audio', 'playAudio'],
            [' ', 'stop playing audio', 'stopAudio'],
            ['b', 'audio is playing?', 'isPlaying']
        ],
        menus: {},
        url: 'https://example.com/myExtension.js'
    };
    
    // Function to handle the selection of an audio file
    ext.selectAudio = function(callback) {
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'audio/*';
        fileInput.onchange = function(event) {
            var file = event.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function() {
                    callback(reader.result);
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    };
    
    // Register the extension
    ScratchExtensions.register('Audio extension', descriptor, ext);
})({});
