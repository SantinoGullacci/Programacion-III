const personas = require('../models/personas.models.js');

const getPersonas = (req, res) => {
  res.json(personas);
};

module.exports = {
  getPersonas
};