const { response } = require('express');

const pokemonsGet = (req, res = response) => {
  const params = req.query;

  res.json({
    msg: 'get API',
    params,
  });
};

const pokemonPut = (req, res) => {
  const { id } = req.params;

  res.json({
    msg: 'put API',
    id,
  });
};

const pokemonPost = (req, res) => {
  const { id, name, healt, type } = req.body;

  res.json({
    msg: 'post API',
    id,
    name,
    type,
    healt,
  });
};

const pokemonsDelete = (req, res) => {
  res.json({
    msg: 'delete API',
  });
};

module.exports = {
  pokemonsGet,
  pokemonPut,
  pokemonPost,
  pokemonsDelete,
};
