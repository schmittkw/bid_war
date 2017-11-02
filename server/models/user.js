// title: (string)
// description: (string, default to empty string)
// completed: (boolean, default to: false)
// created_at: (date, default to current date)
// updated_at: (date, default to current date)

const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name must be at least three characters'],
		minlength: [3, 'Name must be at least three characters']
	},
}, { timestamps: true });

UserSchema.methods.authenticater = function(password){
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', UserSchema);