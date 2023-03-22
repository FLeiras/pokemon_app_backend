const { Router } = require('express');
const {
  pokemonsGet,
  pokemonPut,
  pokemonPost,
  pokemonsDelete,
} = require('../controllers/pokemons.controller');

const router = Router();

router.get('/', pokemonsGet);

router.put('/:id', pokemonPut);

router.post('/', pokemonPost);

router.delete('/', pokemonsDelete);

module.exports = router;
