const Item = require('../models/Item');


exports.getItem = (req, res, next) => {
        //localhost:3000/item/1234
        // res.status(200).json({mss: "success"})
    Item.findById(req.params.id).then(item => res.status(200))
        .catch((err) => next(err));

}

exports.createItem = (req, res, next) =>  {
 //TODO
}