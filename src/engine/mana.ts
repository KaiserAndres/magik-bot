export enum Mana {
  Black,
  White,
  Blue,
  Red,
  Green
}

export function match(name: string): Mana {
  switch(name) {
    case "black": return Mana.Black;
    case "white": return Mana.White;
    case "blue": return Mana.Blue;
    case "red": return Mana.Red;
    case "green": return Mana.Green;
    default: throw new TypeError("Mana type <"+name+"> not existent.");
  }
}
