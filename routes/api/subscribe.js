const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../../database')

router.post('/newUser', (req,res) => {
    bcrypt.genSalt(async (err,salt) => {
        const insertData = req.body;
        insertData.password = await bcrypt.hash(insertData.password, salt)

        db.insert(insertData).into('users').returning('*').then( data =>{
            res.send({salt: salt, data: data})
        }).catch(err => {
            console.log(err)
            res.send(err)
        })
    })
}) 

module.exports = router