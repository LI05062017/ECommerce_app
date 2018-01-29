
const express = require('express')
const Router = express.Router()
const Order = require('../models/Order')
const mongoose = require('mongoose')

Router.route('/')
  .get((req, res) => {
    Order
      .find()
      .populate('products')
      .populate('user')
      .exec((err, orders) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'Success', data: orders})
        }
      })
  })
  .post((req, res) => {
    const order = new Order()
    order.setStatus(req.body)
    order.setDate()
    order.products = req.body.products.map(productId => mongoose.Types.ObjectId(productId))
    order.user = mongoose.Types.ObjectId(req.body.user)
    order.save((err, savedOrder) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({msg: 'Success!', data: savedOrder})
      }
    })
  })

Router.route('/:objectId')
  .get((req, res) => {
    const objectId = req.params.objectId
    Order.findById({_id: objectId}, (err, order) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `Found:${objectId}`, order })
      }
    })
  })

module.exports = Router
