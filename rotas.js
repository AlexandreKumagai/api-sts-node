const rotasApi = require('./controllers/rotas-api')

module.exports = app => {
  app.get('/healthcheck',(req,resp) => resp.status(200).send({message: 'api esta no ar'}))
  
  app.get('/',(req,resp) => resp.status(200).send({message: 'api esta no ar'}))
  rotasApi(app);
};