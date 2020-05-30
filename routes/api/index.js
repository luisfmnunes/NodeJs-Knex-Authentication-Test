const express = require('express');
const router = express.Router()
const todoRoute = require('./todo')
const subscribeRoute = require('./subscribe')
const autheticationRoute = require('./authentication')

router.use('/todo',todoRoute)
router.use('/subscribe',subscribeRoute)
router.use('/authentication',autheticationRoute)

module.exports = router