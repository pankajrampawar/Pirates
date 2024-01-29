const mongoose = require('mongoose');

const CraftSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'response'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 20
    }
})

const Craft = mongoose.model('Craft', CraftSchema);

module.exports = Craft;