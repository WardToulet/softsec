import { Router, Request, Response } from 'express';

const router = Router();

/**
 * Returns a method not allowed
 */
// TODO: move to utils dir
const methodNotAllowed = (req: Request, res: Response) => {
  res.status(405)
    .json({
      msg: `Method "${req.method}" not allowed on "${req.baseUrl}"`,
    });
}

type Options = {
  headers?: string[],
  origin?: string,
}
const generateOptionsHandler = ({ headers, origin }: Options) => (req: Request, res: Response) => {
  res.setHeader(
    'Acces-Control-Allow-Methods',
    req.route.stack
      .map(({ method }: any) => method)
      .filter((method: string | undefined) => method)
      .map((method: string) => method.toUpperCase())
      .join(', ')
  );

  res.setHeader('Access-Control-Allow-Headers', headers?.join(', ') ?? '');
  res.setHeader('Access-Control-Allow-Origin', origin ?? '');

  res.status(200).send();
}

const options = generateOptionsHandler({
  headers: [ 'Accept', 'Content-Type' ],
  origin: '*',
});

// Handle '/' For listing all (GET) and creating (POST)
router.route('/')
  .get((_req, res) => {
    res.json([ { id: 1, title: 'test' }, { id: 2, title: 'other' }]);
  })
  .post((_req, res) => {
    res.send('WIP');
  })
  .options(options)
  .all(methodNotAllowed)
  
router.route('/:id')
  // TODO: generat optoins
  .get((_req, res) => {
    res.send('WIP');
  })
  .delete((_req, res) => {
    res.send('WIP');
  })
  .put((_req, res) => {
    res.send('WIP');
  })
  .options(options)
  .all(methodNotAllowed);

export default router;
