const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reviewSchema = require('./review').schema

const ProductSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  image: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: 'review' }]
})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product