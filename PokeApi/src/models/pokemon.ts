import { User } from './user';
import { PokemonMove } from './pokemonMove';

export class Pokemon {
    id: number;
    name: string;
    level: number;
    type: string[];
    moves: PokemonMove[];
    trainer: User;

    constructor(id = 0, name = '', level= 0, type: string[] = [], moves: PokemonMove[] = [],
        trainer?: User) {
            this.id = id;
            this.name = name;
            this.level = level;
            this.type = type;
            this.moves = moves;
            this.trainer = trainer;
        }

}