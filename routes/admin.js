// const express=require('express');

// const router=express.Router();

// router.get('/add-product',(req,res,next)=>{
//     res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button</form>')
 
//  })
 
//  router.post('/product',(req,res,next)=>{
//      console.log(req.body);
//      res.redirect('/shop');
//  })


// module.exports=router;



const path=require('path');

const express = require('express');

const rootDir=require('../helper/path')

const router = express.Router();

// Route to display the form for adding a new product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

// Route to handle the form submission and add a product
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); // Redirect to the shop page after the form is submitted
});

module.exports = router;
