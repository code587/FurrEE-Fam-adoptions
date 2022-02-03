const { Schema, model } = require('mongoose');

const greyhoundSchema = new Schema(
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

const Greyhound = model('Greyhound', greyhoundSchema);

module.exports = Greyhound;