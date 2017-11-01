import { RandomService } from '../services/random';
import { Card } from './card';

export class Deck {
  
  cards: Card[];

  shuffle(): void {
    rand = RandomService();
    var deleteDeck = this.cards.slice(0); //make a copy of the deck
    var newDeck: Card[] = [];
    var n: number = 0;

    for (var i=0; i<cards.lenght(); i++) {
      n = rand.randint(0, deleteDeck.lenght());
      newDeck.append(deleteDeck[n]);
      deleteDeck.splice(n, 1);
    }
    this.cards = newDeck;
  }
}
