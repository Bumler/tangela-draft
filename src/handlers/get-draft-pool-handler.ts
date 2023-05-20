import { Request, Response, Router } from 'express';
import { getMappedDraftPool } from '../dataStore/mock-db';

const app = Router();

app.get('/', async (req: Request, res: Response) => {
  res.send(getMappedDraftPool());
});

export default app;