const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

//@route  GET api/contacts
//@desc   Get all users contact
//acccess Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
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