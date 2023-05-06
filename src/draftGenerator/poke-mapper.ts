import axios from "axios";
import { pokemon } from "../common-interfaces/pokemon";
import { json } from "stream/consumers";
import { TierData } from "./tier-based-generator";

export async function mapPokemonData(tieredMon: TierData): Promise<pokemon> {
    const {pokemonName, tier} = tieredMon;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    const pokemonData = response.data;
    console.log(JSON.stringify(pokemonData.sprites))

    const gameData = {
        type1: pokemonData.types[0].type.name,
        type2: pokemonData.types[1] ? pokemonData.types[1].type.name : null,
        abilities: pokemonData.abilities.map((ability: { ability: { name: string; url: string; }; }) => {
            return {
                name: ability.ability.name,
                description: ability.ability.url // todo - get description from this url
                // potentially better to use GET https://pokeapi.co/api/v2/ability/{id or name}/
                // that has the full description
            }
        }),
        stats: {
            hp: pokemonData.stats[0].base_stat,
            attack: pokemonData.stats[1].base_stat,
            defense: pokemonData.stats[2].base_stat,
            specialAttack: pokemonData.stats[3].base_stat,
            specialDefense: pokemonData.stats[4].base_stat,
            speed: pokemonData.stats[5].base_stat
        }
    }

    const displayData = {
        artUrl: pokemonData.sprites.other['official-artwork'].front_default,
        spriteUrl: pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_default,
        backSpriteUrl: pokemonData.sprites.versions['generation-iv']['diamond-pearl'].back_default,
    }

    return {
        name: pokemonName,
        tier,
        gameData,
        displayData
    }
}