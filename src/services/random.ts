/* 
 * Random number generator service.
 *
 * Credit to users lsenta and makoConstruct on github.
 *
 * */

export class RandomService {
  private seed: number;

  constructor(seed: number) { this.seed = seed; }

  private next(min: number, max: number): number {
    min = min || 0;
    max = max || 0; // In case they aren't given.

    this.seed = (this.seed * 9301 + 49297) % 233280;

    var rnd = this.seed / 233281;
    return min + rnd * (max - min);
  }

  public randInt(min: number, max: number) {
    return Math.floor(this.next(min, max));
  }

  public randDouble(): number {
    return this.next(0, 1);
  }
}
