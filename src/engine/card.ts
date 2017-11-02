import { Cost } from './cost';

export interface Card {
  name: string;
  image: string; // Possibly string, or url, might make custom type later.
  description: string;
}
