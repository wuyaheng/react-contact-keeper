const express = require('express');
const router = express.Router();

//@route  GET api/contacts
//@desc   Get all users contact
//acccess Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
})


//@route  POST api/contacts
//@desc   Add new contact
//acccess Private
router.post('/', (req, res) => {
    res.send('Add contacts')
})


//@route  UPDATE api/contacts/:id
//@desc   Update contact
//acccess Private
router.put('/:id', (req, res) => {
    res.send('Update contacts')
})

//@route  DELETE api/contacts/:id
//@desc   Delete contact
//acccess Private
router.delete('/:id', (req, res) => {
    res.send('Delete contacts')
})

module.exports = router;