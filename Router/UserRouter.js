const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUser, updateUser, updateUsers, deleteUser, deleteUsers} = require('../Controller/UserController');

router.post('/createUser', createUser);
router.get('/getUsers', getUsers);
router.get('/getUser/:id', getUser);
router.put('/updateUser/:id', updateUser);
router.put('/updateUsers',updateUsers)
router.delete('/deleteUser/:id', deleteUser);
router.delete('/deleteUsers',deleteUsers);

module.exports = router;
