const { Schema, model } = require('mongoose');


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
  adopt: {
    type: Schema.Types.ObjectId,
    ref: "Adopt"
  }
}
);

const Dog = model('Dog', dogSchema);

module.exports = Dog;
