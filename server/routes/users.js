
const express = require('express')
const Router = express.Router()
const User = require('../models/User')

Router.route('/')
  .get((req, res) => {
    User.find((err, users) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({msg: 'SUCCESS ALL USERS', data: users})
      }
    })
  })
  .post((req, res) => {
    const user = new User()
    user.setUserData(req.body)
    user.setDate()
    user.save((err, savedUser) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS on POST', data: savedUser })
      }
    })
  })

Router.route('/:userId')
  .get((req, res) => {
    const userId = req.params.userId
    User.findById({_id: userId}, (err, user) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({msg: `Found ${userId}`, user})
      }
    })
  })
  .put((req, res) => {
    const editUserId = req.params.userId
    User.findById({_id: editUserId}, (err, user) => {
      if (err) {
        res.json({ error: err })
      } else {
        user.setUserData(req.body)
        user.save((err, updatedUser) => {
          if (err) {
            res.json({ error: err })
          } else {
            res.json({msg: 'Successfully Updated', user: updatedUser})
          }
        })
      }
    })
  })
  .delete((req, res) => {
    const deleteUserId = req.params.userId
    User.remove({_id: deleteUserId}, (err, user) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({msg: 'Your User was deleted', user})
      }
    })
  })
module.exports = Router
