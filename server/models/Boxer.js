const { Schema, model } = require('mongoose');

const boxerSchema = new Schema(
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

const Boxer = model('Boxer', boxerSchema);

module.exports = Boxer;
