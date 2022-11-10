const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');


router.get('/', (req, res, next) => {
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const product = adminData.products;
    res.render('shop', { prods: product, pageTitle: 'Shop', path: '/', hasProducts: adminData.products.length > 0, activeShop: true, productCSS: true });
});

module.exports = router
