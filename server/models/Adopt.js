const { Schema, model } = require('mongoose');

const availableSchema = new Schema({
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

const Available = model('Available', availableSchema);

module.exports = Available;