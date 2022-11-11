const { Schema, model } = require('mongoose');


const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true,
    }
})


module.exports = model('Book', bookSchema)
