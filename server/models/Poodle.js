const { Schema, model } = require('mongoose');

const poodleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    age: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  }
);

const Poodle = model('Poodle', poodleSchema);

module.exports = Poodle;