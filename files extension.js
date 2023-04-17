class FileExtension {
  getInfo() {
    return {
      id: 'file',
      name: 'File',
      blocks: [
        {
          opcode: 'saveValueAsText',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Save [value] as [filename] file',
          arguments: {
            value: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, World!'
            },
            filename: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello.txt'
            }
          }
        },
        {
          opcode: 'readValueFromFile',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Read value from [filename] file',
          arguments: {
            filename: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello.txt'
            }
          }
        }
      ]
    };
  }

  saveValueAsText(args) {
    const value = args.value;
    let filename = args.filename;
    const extension = filename.split('.').pop();

    // If the file extension is not .txt, .lua, or .py, set it to .txt by default
    if (extension !== 'txt' && extension !== 'lua' && extension !== 'py') {
      filename += '.txt';
    }

    // Add your custom logic here to save the value as text with the specified filename
    console.log('Saving value:', value, 'to file:', filename);
  }

  readValueFromFile(args) {
    const filename = args.filename;

    // Add your custom logic here to read the value from the specified filename
    console.log('Reading value from file:', filename);

    // Return the read value from the file, or an empty string if the file does not exist
    return '';
  }
}

Scratch.extensions.register(new FileExtension());
