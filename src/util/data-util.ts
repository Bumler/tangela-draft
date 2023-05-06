import axios from 'axios';
import * as fs from 'fs';

import { FormatsData } from "../data/gen4-format-data";

export function printUniqueTiers() : void {
    const tiers = new Set<string>();
  
    // Loop through each entry in FormatsData and add its tier to the Set
    for (const key in FormatsData) {
      const formatData = FormatsData[key];
      tiers.add(formatData.tier);
    }
  
    // Print out the unique tiers
    console.log("Unique Tiers:");
    for (const tier of tiers) {
      console.log(tier);
    }
  }

  export async function downloadPokemonImageByName(pokemonName: string): Promise<string> {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const imageUrl = response.data.sprites.front_default;
      console.log(response.data.sprites);
      console.log(response.data);
      // todo - explore this api further
      // we can just save the front (official art) and backsprite url 
      // and pass those to the front.
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(imageResponse.data, 'binary');
      const fileName = `img/${pokemonName}.png`;
      fs.writeFileSync(fileName, imageBuffer);
      return `Image downloaded and saved as ${fileName}`;
    } catch (error) {
      console.error(`Error downloading Pokémon image: ${error}`);
      return 'Image download failed';
    }
  }

  async function wait() {
    return new Promise(resolve => {
      setTimeout(resolve, 200);
    });
  }