const { Schema, model } = require('mongoose');

const boxerSchema = new Schema(
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

const Boxer = model('Boxer', boxerSchema);

module.exports = Boxer;
