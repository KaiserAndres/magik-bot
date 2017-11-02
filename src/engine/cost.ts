import { Mana } from './mana';

export class Cost {
  general: number;
  special: [[Mana, number]];

  constructor(general: number, special:[[Mana, number]]) {}

}
