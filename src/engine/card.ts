import { Cost } from './cost';

export class Card {
  name: string;
  cardType: string; // Add types enum later. Or make it a child class?
  cost: Cost;
  image: string; // Possibly string, or url, might make custom type later.
  description: string;
  attack: number;
  defence: number;
}
