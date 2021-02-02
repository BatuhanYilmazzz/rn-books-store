const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use('/', jsonServer.router('db.json'));

server.listen(3000, () => {
  console.log('JSON Server is running');
});
