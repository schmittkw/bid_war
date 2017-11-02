const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');

class UsersController {
	
	create(req, res) {
		User.findOne({ name: req.body.name }, (err, user) => {
			if(err){
				console.log(err);
				return res.json(err);
			}
			if(!user){
				User.create(req.body, (err, user) => {
					if(err){
						return res.json(err);
					}else{
						console.log('new user: ', user);
						req.session.user_id = user._id;
						req.session.name = user.name;
						return res.json(user);
					}					
				})
			}else{
				console.log('found user: ', user);
				req.session.user_id = user._id;
				req.session.name = user.name;
				return res.json(user);				
			}
			
		})
	}	
	logout(req, res) {
        delete req.session.user_id;
        return res.json({ status: true });
    }

    session(req, res) {
        if(!req.session.user_id) {
            return res.json({ status: false });
        }
        User.findById(req.session.user_id, (err, user) => {
            if(err) {
                return res.json(err);
            }
            return res.json(user);
        })
    }
	show(req, res){
		User.findById(req.params.id, (err, user) => {
			if(err){
				return res.json({ error: '404 - User not found' });
			}
			return res.json(user);
		})
	}
	update(req, res) {
		// by default update doesn't run validators. you need to runValidators: true to activate
		Task.findByIdAndUpdate(req.params.id, { $set : req.body }, { runValidators: true, new: true }, (err, task) => {
			if(err){
				return res.json(err);
			}
			return res.json(task);
		})
	}
	destroy(req, res){
		Task.findByIdAndRemove(req.params.id, (err, task) => {
			if(err){
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted user'
			});
		})
	}
}

// get all tasks method: index, route: /tasks, type: get
// create a task method: create, route: /tasks type: post
// get a single task form the db method: show, route: /tasks/:id, type: get
// update task by id method: update, route: /tasks/:id, type: put/patch
// delete task by id method: destroy, route: /tasks/:id, type: delete





module.exports = new UsersController();


