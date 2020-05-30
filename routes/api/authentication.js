const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../../database')

router.get('/', (req,res) => {
    db('users').select().where({username: req.body.username}).first().returning('*').then(data => {
        if(!data){
            res.send({message: "No Username '" + req.body.username + "' Found!", exists: false})
        }
        else{
            bcrypt.compare(req.body.password,data.password, (err, same) => {
                console.log(same)
                res.send({passwordCheck: same, exists: true, error: err, data: data})
            })
        }
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
}) 

module.exports = router