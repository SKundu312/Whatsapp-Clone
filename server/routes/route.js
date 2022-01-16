const router = require('express').Router();
const {addUser,getUsers} = require('../controller/userController')

router.post('/add', addUser)
router.get('/users',getUsers)

module.exports = router;