import { Card } from '../engine/card';
import { Creature } from '../engine/card-types/creature';
import { Land } from '../engine/card-types/land';
import { Mana } from '../engine/mana';
import { Cost } from '../engine/cost';

var mock_cards: Card[] = [
  new Land('Island', '', '', Mana.Blue, 1),
  new Land('Island', '', '', Mana.Blue, 1),
  new Land('Island', '', '', Mana.Blue, 1),
  new Land('Island', '', '', Mana.Blue, 1),
  new Creature('Apprentice Sorcerer', '', '', new Cost(2, [[Mana.Blue, 1]]), 1, 1),
  new Creature('Apprentice Sorcerer', '', '', new Cost(2, [[Mana.Blue, 1]]), 1, 1),
  new Creature('Apprentice Sorcerer', '', '', new Cost(2, [[Mana.Blue, 1]]), 1, 1),
  new Creature('Apprentice Sorcerer', '', '', new Cost(2, [[Mana.Blue, 1]]), 1, 1),
];

export function getCards(): Card[] { return mock_cards; }
