export interface pokemon {
    name: string;
    tier: string
    gameData: gameData
    displayData: displayData;
}

export interface gameData {
    type1: string;
    type2?: string;
    abilities: ability[];
    stats: stats;
}

export interface ability {
    name: string;
    description: string;
}

export type pokemonType = 'Normal' | 'Fire' | 'Water' | 'Electric' | 'Grass' | 'Ice' | 'Fighting' | 'Poison' | 'Ground' | 'Flying' | 'Psychic' | 'Bug' | 'Rock' | 'Ghost' | 'Dragon' | 'Dark' | 'Steel' | 'Fairy';

export interface stats {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
}

export interface displayData {
    artUrl: string;
    spriteUrl: string;
    backSpriteUrl: string;
}
