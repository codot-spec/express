// const express=require('express');
// const bodyParser=require('body-parser');
// const app=express();

// const adminRoutes=require('./routes/admin.js');
// const shopRoutes=require('./routes/shop.js');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use('/admin',adminRoutes);
// app.use('/shop',shopRoutes);

// app.use((req,res,next)=>{
//    res.status(404).send('<h1>Page not found</h1>');
// })

// app.listen(3000);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Import the routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Middleware to parse form data (URL-encoded data)
app.use(bodyParser.urlencoded({ extended: false }));

// Use /admin for admin-related routes
app.use('/admin', adminRoutes);

// Use /shop for shop-related routes
app.use('/shop', shopRoutes);

// Handle 404 errors (Page Not Found)
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

