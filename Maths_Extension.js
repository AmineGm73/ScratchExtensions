class Randomizer {
  getInfo() {
    return {
      id: 'randomizer',
      name: 'Randomizer',
      blocks: [
        {
          opcode: 'randomNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pick random number from [min] to [max]',
          arguments: {
            min: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            max: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        }
      ]
    };
  }

  randomNumber(args) {
    const min = args.min;
    const max = args.max;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

Scratch.extensions.register(new Randomizer());
