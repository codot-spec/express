// const express=require('express');

// const router=express.Router();

// router.get('/shop',(req,res,next)=>{
//     res.send('<h1>Hello</h1>');
//  })


//  module.exports=router;


const express = require('express');
const router = express.Router();

// Route to display the shop page
router.get('/', (req, res, next) => {
    res.send('<h1>Welcome to the Shop!</h1>');
});

// Route for viewing all products (optional example route)
router.get('/shop', (req, res, next) => {
    res.send('<h1>All Products</h1>');
});


module.exports = router;
