const { Schema, model } = require('mongoose');

const greyhoundSchema = new Schema(
  {
    characteristics: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    behaviors: {
      type: String,
      required: true
    },
    concerns: {
      type: String,
      required: true
    },
    adopt: {
      type: Schema.Types.ObjectId,
      ref: "Adopt"
    }
  }
);

const Greyhound = model('Greyhound', greyhoundSchema);

module.exports = Greyhound;