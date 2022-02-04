const { Schema, model } = require('mongoose');

const poodleSchema = new Schema(
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
    available: {
      type: Schema.Types.ObjectId,
      ref: "Available"
    }
  }
);

const Poodle = model('Poodle', poodleSchema);

module.exports = Poodle;