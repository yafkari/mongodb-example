const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoItemSchema = new Schema({
    text: {
        type: String,
        default: "No title."
    },
    done: {
        type: Boolean,
        default: false
    }
})

mongoose.model('todos', todoItemSchema);