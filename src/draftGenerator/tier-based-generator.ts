import { Tier } from "../data/data-interfaces/modded-species-format-data";
import { FormatsData } from "../data/gen4-format-data";

export interface TierGeneratorConfig {
    tiers: Set<Tier>;
    n: number;
}

export interface TierData {
    pokemonName: string;
    tier: Tier;
}

export const testMonTierConfig = [
    {
        tiers : new Set<Tier>(["OU", ("(OU)")]),
        n : 6
    },
    {
        tiers : new Set<Tier>(["UU", "UUBL"]),
        n : 6
    },
    {
        tiers : new Set<Tier>(["NU", "NUBL"]),
        n : 6
    }
]

export const hundreMonTierConfig = [
    {
        tiers : new Set<Tier>(["OU", ("(OU)")]),
        n : 25
    },
    {
        tiers : new Set<Tier>(["UU", "UUBL"]),
        n : 40
    },
    {
        tiers : new Set<Tier>(["NU", "NUBL"]),
        n : 35
    }

]

// create a function which will take in a a list of tiers and return n randomly selected species from that tier
export function generateDraftPoolForTier(tiers: Set<Tier>, n: number) : Set<TierData> {
    // create a list of all species in the tiers
    const species = new Set<TierData>();
    for (const mon of Object.keys(FormatsData)) {
        if (tiers.has(FormatsData[mon].tier)) {
            species.add({pokemonName: mon, tier: FormatsData[mon].tier});
        }
    }

    // convert the set to an array
    const speciesArray = Array.from(species);

    // randomly select n species from the array
    const draftPool = new Set<TierData>();
    while (draftPool.size < n) {
        const randomIndex = Math.floor(Math.random() * speciesArray.length);
        draftPool.add(speciesArray[randomIndex]);
    }

    return draftPool;
}

export function generateDraftPoolForTierConfig(config: TierGeneratorConfig[]) : Set<TierData> {
    // create a draft pool for each config merge and return them
    const draftPool = new Set<TierData>();
    for (const tierConfig of config) {
        const tierDraftPool = generateDraftPoolForTier(tierConfig.tiers, tierConfig.n);
        for (const mon of tierDraftPool) {
            draftPool.add(mon);
        }
    }

    return draftPool;
}
