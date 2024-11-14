// const express=require('express');

// const router=express.Router();

// router.get('/shop',(req,res,next)=>{
//     res.send('<h1>Hello</h1>');
//  })


//  module.exports=router;


const path=require('path');

const express = require('express');

const rootDir=require('../helper/path')
const router = express.Router();

// Route to display the shop page
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
});



module.exports = router;
