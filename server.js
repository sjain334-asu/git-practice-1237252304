const express = require('express');
const logger = require('./loggerMiddleware');

const app = express();
const PORT = 4000;

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello from Module 5 Lab 1 - logger middleware is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
