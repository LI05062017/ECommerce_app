const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  name: {type: String, require: true},
  price: {type: String, require: true},
  img: String,
  catagory: {type: String, require: true},
  created: {type: Date, required: true}
})

Product.methods.setProductData = function (requestBody) {
  this.name = requestBody.name || this.name
  this.price = requestBody.price || this.price
  this.img = requestBody.img || this.img
  this.catagory = requestBody.catagory || this.catagory
}

Product.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Product', Product)
