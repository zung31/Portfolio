const { createServer } = require('http');
const { app } = require('../dist/zung/server/main');

const server = createServer(app);
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});