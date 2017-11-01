import { Mana } from './mana';

export class Cost {
  general: number;
  special: [[Mana, number]];

  constructor(general: number, special:[[Mana, number]])

  constructor(general: number, special:[[number, string]]) {
    this.general = general;
    this.special = [];
    for (var cost of special) {
      try {
        var myMana = Mana.match(cost[2]);
        this.special.append([cost[0]]);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
