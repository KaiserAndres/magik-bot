import { Card } from '../card';
import { Cost } from '../cost';

export class Creature implements Card {

  name: string;
  image: string;
  description: string;

  cost: Cost;
  attack: number;
  defence: number;

  constructor(name: string, image: string, description: string,
              cost: Cost, attack: number, defence: number) {}

}
