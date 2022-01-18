const router = require('express').Router();
const {addUser,getUsers} = require('../controller/userController')
const { Conversation,getConvo } = require('../controller/convoController')
const {newMsg} = require('../controller/msgController')

router.post('/add', addUser)
router.get('/users',getUsers)
router.post('/convo/add',Conversation)
router.get('/convo/get', getConvo)
router.post('/msg/add', newMsg)

module.exports = router;