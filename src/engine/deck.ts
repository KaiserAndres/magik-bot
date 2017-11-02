import { RandomService } from '../services/random';
import { Card } from './card';

export class Deck {
  
  cards: Card[];
  private rand = RandomService(32847923);

  constructor(cards: Card[]) {}

  public shuffle(): void {
    var deleteDeck = this.cards.slice(0); //make a copy of the deck
    var newDeck: Card[] = [];
    var n: number = 0;

    for (var i=0; i<cards.length(); i++) {
      n = rand.randint(0, deleteDeck.length());
      newDeck.append(deleteDeck[n]);
      deleteDeck.splice(n, 1);
    }
    this.cards = newDeck;
  }

  public draw(): Card {
    const index = rand.randint(0, cards.length(););
    var my_card = this.cards[index];
    this.remove_card(index);
    
    return my_card;
  }
  
  private remove_card(index: number): void {
    this.cards = this.cards.splice(index, 1);
  }

}
