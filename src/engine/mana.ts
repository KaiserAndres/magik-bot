export enum Mana {
  Black,
  White,
  Blue,
  Red,
  Green
}

namespace Mana {
  export function match(name: string): Mana {
    switch(name) {
      case "black": return Black;
      case "white": return White;
      case "blue": return Blue;
      case "red": return Red;
      case "green": return Green;
      default: throw new TypeError("Mana type <"+name+"> not existent.");
    }
  }
}
