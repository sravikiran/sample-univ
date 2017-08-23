export class Pokemon {
  name: string;
  id: number;
  types = [];
  stats = [];

  get imageUrl() {
    return `https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }
}