class FileExtension {
    constructor(runtime) {
      this.runtime = runtime;
      this.files = {};
    }
  
    getInfo() {
      return {
        id: 'helloFile',
        name: 'Hello File',
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
  
      filename += '.txt';

  
      this.files[filename] = value;
    }
  
    readValueFromFile(args) {
      const filename = args.filename;
  
      if (filename in this.files) {
        return this.files[filename];
      } else {
        return '';
      }
    }
  }
  
  Scratch.extensions.register(new FileExtension());
  