import { generateDraftPoolForTier } from "./draftGenerator/tier-based-generator";
import { printUniqueTiers } from "./util/data-util";

function helloWorld() {
    const monsInTier = generateDraftPoolForTier(new Set(["OU", "(OU)"]), 10);
    // print each string in draft pool
    for (const mon of monsInTier) {
        console.log(mon);
    }
}

helloWorld();