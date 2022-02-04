const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const dogSchema = new Schema({
  breed: {
    type: String,
    required: true,
  },
  characteristics: {
    type: String,
    required: true,
  },
  behaviors: {
    type: String,
    required: true,
  },
  available: {
    type: Schema.Types.ObjectId,
    required: "available"
  }
}
);

const Dog = model('Dog', dogSchema);

module.exports = Dog;
