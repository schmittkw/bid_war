const mongoose = require('mongoose');
const Product2 = mongoose.model('Product2');

class Product2sController {
	
	create(req, res) {
        Product2.findOne({bid: { $gte: req.body.bid}}).exec((err,proddy)=>{
            if(err){
                console.log('could not find appointments')
                return res.json(err);
            }
            if(proddy){
                return res.json({
                    'unsuccessful': 'Need to bid higher'
                });
            }        
            // req.body.bid = req.body.bid2;
            req.body.user = req.session.user_id
            Product2.create({user:req.session.user_id,bid:req.body.bid}, (err, product) => {
                if(err){    
                    return res.json(err);
                }
                return res.json(product)
            })
        })
    }
	index(req, res){
		Product2.find({}).populate({ path: 'user', model: 'User' }).sort({ bid:-1 }).exec((err, product) => {
			if(err){
				return res.json({ error: '404 - product not found' });
			}
			return res.json(product);
		})
	}
	getHigh(req,res){
        Product2.find({}).populate({ path: 'user', model: 'User' }).sort({ bid:-1 }).limit(1).exec((err, product) =>{
            if(err){
				return res.json({ error: '404 - product not found' });
            }
            return res.json(product);
        })
    }
}




module.exports = new Product2sController();


