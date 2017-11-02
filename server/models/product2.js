const mongoose = require('mongoose');

let Product2Schema = new mongoose.Schema({
	user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bid: {
        type: Number,
        required: [true, 'Must enter bid amount.']
    }
}, { timestamps: true });



mongoose.model('Product2', Product2Schema);