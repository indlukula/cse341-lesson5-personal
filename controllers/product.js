const db = require('../models');
const product = require('../models/product');
const User = db.user;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.productName || !req.body.PLUcode || !req.body.barcode || !req.body.description || !req.body.category || !req.body.packsize || !req.body.quantity || !req.body.unitPrice || !req.body.seelingPrice) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const product = new product(req.body);
  product
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the product.'
      });
    });
};

exports.getAll = (req, res) => {
  product.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving products.'
      });
    });
};

exports.getProduct = (req, res) => {
  const productName = req.params.productName;
  User.find({ productName: productName })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving product.'
      });
    });
};