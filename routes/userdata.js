const path = require('path')
const express = require('express');
const router = express.Router()
const dataSaver = require( './dataSaver');
// app.use(express.json())
// app.use(express.static{extended:false}));
module.exports = () =>{
    router.get('/', (req, res)=>{
        //  console.log(req.query);
        res.redirect('/contact')
        if(res.status(200))
        dataSaver.writeData(req.query);
    })
    return router
}

