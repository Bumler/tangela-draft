import { Request, Response, Router } from 'express';
import { draftMon, getMappedDraftPool } from '../dataStore/mock-db';

const app = Router();

app.post('/', async (req: Request, res: Response) => {
    res.send(draftMon(req.body.pokemonName, req.body.trainerId));
});

export default app;