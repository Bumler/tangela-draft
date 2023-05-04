import { Tier } from "../data/data-interfaces/modded-species-format-data";
import { FormatsData } from "../data/gen4-format-data";

// create a function which will take in a a list of tiers and return n randomly selected species from that tier
export function generateDraftPoolForTier(tiers: Set<Tier>, n: number) : Set<string> {
    // create a list of all species in the tiers
    const species = new Set<string>();
    for (const mon of Object.keys(FormatsData)) {
        if (tiers.has(FormatsData[mon].tier)) {
            species.add(mon);
        }
    }

    // convert the set to an array
    const speciesArray = Array.from(species);

    // randomly select n species from the array
    const draftPool = new Set<string>();
    while (draftPool.size < n) {
        const randomIndex = Math.floor(Math.random() * speciesArray.length);
        draftPool.add(speciesArray[randomIndex]);
    }

    return draftPool;
}
