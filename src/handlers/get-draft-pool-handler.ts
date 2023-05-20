import { Request, Response, Router } from 'express';
import { generateDraftPoolForTierConfig, testMonTierConfig } from '../draftGenerator/tier-based-generator';
import { mapPokemonData } from '../draftGenerator/poke-mapper';

const app = Router();

app.get('/', async (req: Request, res: Response) => {
  const draftPool = generateDraftPoolForTierConfig(testMonTierConfig);
  const mappedMons = await Promise.all(
        Array.from(draftPool).map(mapPokemonData));
        
  res.send(mappedMons);
});

export default app;