

//import controllers
const Users = require('../controllers/users');
const Product1 = require('../controllers/product1s');
const Product2 = require('../controllers/product2s');
const Product3 = require('../controllers/product3s');
const path = require('path');

module.exports = function(app){
	// app.get('/', Users.index);
	app.post('/users', Users.create);
	app.delete('/users', Users.logout);
	app.get('/session', Users.session);
	app.post('/createprod1', Product1.create);
	app.get('/getprod1', Product1.index);
	app.post('/createprod2', Product2.create);
	app.get('/getprod2', Product2.index);
	app.post('/createprod3', Product3.create);
	app.get('/getprod3', Product3.index);
	app.get('/get1', Product1.getHigh);
	app.get('/get2', Product2.getHigh);
	app.get('/get3', Product3.getHigh);
	app.delete('/remove', Product1.destroy);
	// app.get('/session', Users.getLast);
	// app.get('/users/:id', Users.show);
	// app.put('/users/:id', Users.update);
	// app.delete('/users/:id', Users.destroy);


	// catch-all must be at the bottom
	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve('./public/dist/index.html'))
	})
}