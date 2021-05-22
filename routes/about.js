const path = require('path')
const express = require('express');
const router = express.Router()
module.exports = () =>{
    router.get('/', (req, res)=>{
        res.sendFile(path.join(process.cwd(), 'static', 'about.html'));
    })
    return router
}

