import { User } from './models/user';
import { Pokemon } from './models/pokemon';
import { PokemonMove } from './models/pokemonMove';

const peter = new User(1, 'peter', 'password', 'peter');
const kyle = new User(2, 'kyle', 'password', 'kyle');

const slash = new PokemonMove(1, 'slash', 'normal', 25, 10);
const hyperBeam = new PokemonMove(2, 'hyper beam', 'normal', 10, 100);
const blastBurn = new PokemonMove(3, 'blast burn', 'fire', 10, 30);
const surf = new PokemonMove(4, 'surf', 'water', 20, 75);

const pokemon: Pokemon[] = [
    new Pokemon(4, 'charmander', 5, ['fire'], [slash, blastBurn], peter),
    new Pokemon(7, 'squirtle', 5, ['water'], [hyperBeam, surf], kyle)
];

console.log(pokemon);