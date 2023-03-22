const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.pokemonsPath = '/api/pokemons';

    // Middlewares
    this.middlewares();

    // Rutas
    this.routes();
  }

  middlewares() {
    //CORS

    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.pokemonsPath, require('../routes/pokemons.route'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('server listen port', this.port);
    });
  }
}

module.exports = Server;
