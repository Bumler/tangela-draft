import { mapPokemonData } from "./draftGenerator/poke-mapper";
import { generateDraftPoolForTier, generateDraftPoolForTierConfig, hundreMonTierConfig, testMonTierConfig } from "./draftGenerator/tier-based-generator";
import * as fs from 'fs';

async function helloWorld() {
    const monsInTier = generateDraftPoolForTierConfig(testMonTierConfig);
    
    // call the mapPokemonData function on each mon. Await all the promises and then print each mon as json
    const monsInTierWithPokemonData = await Promise.all(
        Array.from(monsInTier).map(mapPokemonData));

    const monsAsJson = new Set<string>(); 
    for (const mon of monsInTierWithPokemonData) { 
        monsAsJson.add(JSON.stringify(mon));
    }

    writeSetToJsonFile(monsAsJson);
}

function writeSetToJsonFile(set: Set<string>): void {
    const filePath = './tmp/draftPool.json';
    const jsonContent = JSON.stringify([...set], null, 2);
  
    fs.writeFile(filePath, jsonContent, err => {
      if (err) {
        console.error(`Error writing set to JSON file: ${err}`);
        return;
      }
      console.log(`Set written to JSON file: ${filePath}`);
    });
  }

helloWorld();