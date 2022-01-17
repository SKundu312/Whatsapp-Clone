const router = require('express').Router();
const {addUser,getUsers} = require('../controller/userController')
const { Conversation } = require('../controller/convoController')

router.post('/add', addUser)
router.get('/users',getUsers)
router.post('/convo',Conversation)

module.exports = router;