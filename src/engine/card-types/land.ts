import { Card } from '../card';
import { Mana } from '../mana';

export class Land implements Card {
  name: string;
  image: string;
  description: string;

  landType: Mana;
  ammount: number;

  constructor(name: string, image: string, description:string,
              landType: Mana, ammount: number) {}
}
