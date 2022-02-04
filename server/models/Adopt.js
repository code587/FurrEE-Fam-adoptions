const { Schema, model } = require('mongoose');

const adoptSchema = new Schema({
    breed: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dog: {
        type: Schema.Types.ObjectId,
        required: "Dog"
      }
});

const adopt = model('adopt', adoptSchema);

module.exports = adopt;