import express from 'express';

import bookCrud from './crud/book';

const app = express();
const PORT = 8080;

app.get('/', (_req, res) => {
  res.send('Hello world');
})

app.use('/book', bookCrud);

app.listen(PORT, () => console.log(`Listenting on port ${PORT}`));
