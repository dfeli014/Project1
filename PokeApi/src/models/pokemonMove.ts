export class PokemonMove {
    id: number;
    name: string;
    type: string;
    powerPoints: number;
    damage: number;

    constructor(id = 0, name = '', type = '', powerPoints = 0, damage = 0) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.powerPoints = powerPoints;
        this.damage = damage;
    }
}