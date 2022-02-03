const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const breedSchema = new Schema({
  breedType: {
    type: String,
    required: true,
   
  },
  breedColor: {
    type: String,
    required: true,
  },
  breedAge: {
    type: String,
    required: true,
  },
  breedDescription: {
    type: String,
    required: true,
  },
  breedAdoptionfee: {}

});

const Breed = model('Breed', breedSchema);

module.exports = Breed;
