const mongoose = require('mongoose');
const Product1 = mongoose.model('Product1');
const Product2 = mongoose.model('Product2');
const Product3 = mongoose.model('Product3');

class Product1sController {
	
	create(req, res) {
        Product1.findOne({bid: { $gte: req.body.bid}}).exec((err,proddy)=>{
            if(err){
                console.log('could not find appointments')
                return res.json(err);
            }
            if(proddy){
                return res.json({
                    'unsuccessful': 'Need to bid higher'
                });
            }        
            // req.body.bid = req.body.bid1;
            req.body.user = req.session.user_id
            Product1.create({user:req.session.user_id,bid:req.body.bid}, (err, product) => {
                if(err){    
                    return res.json(err);
                }
                return res.json(product)
            })
        })
    }
	index(req, res){
		Product1.find({}).populate({ path: 'user', model: 'User' }).sort({ bid:-1 }).exec((err, product) => {
			if(err){
				return res.json({ error: '404 - product not found' });
			}
			return res.json(product);
		})
    }
    getHigh(req,res){
        Product1.find({}).populate({ path: 'user', model: 'User' }).sort({ bid:-1 }).limit(1).exec((err, product) =>{
            if(err){
				return res.json({ error: '404 - product not found' });
            }
            return res.json(product);
        })
    }
    destroy(req,res){
        Product1.remove({}, (err, prod3) => {
            if(err){
				return res.json(err);
			}
			// return res.json(prod3);
            Product2.remove({}, (err, prod2) => {
                if(err){
                    return res.json(err);
                }
                // return res.json(prod2);
                Product3.remove({}, (err, prod1) => {
                    if(err){
                        return res.json(err);
                    }
                    return res.json(prod1);
                })
            })
        })
    }
}




module.exports = new Product1sController();


