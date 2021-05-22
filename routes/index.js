const path = require('path');
const express = require('express');
const router = express.Router()

const aboutRoute = require('./about')
const contactUsRoute = require('./contactus')
const servicesRoute = require('./services')
const userData = require('./userdata')


module.exports = () => {
    router.get('/home', (req, res)=>{
        res.sendFile(path.join(process.cwd(), 'static', 'index.html'));
    });
    
    router.use('/about', aboutRoute())
    router.use('/contact', contactUsRoute())
    router.use('/services', servicesRoute())
    router.use('/contact/form', userData())

    return router
}