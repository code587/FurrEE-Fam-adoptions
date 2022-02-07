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
    user: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
});

const Adopt = model('Adopt', adoptSchema);

module.exports = Adopt;