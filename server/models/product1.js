const mongoose = require('mongoose');

let Product1Schema = new mongoose.Schema({
	user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bid: {
        type: Number,
        required: [true, 'Must enter bid amount.']
    },
}, { timestamps: true });



mongoose.model('Product1', Product1Schema);