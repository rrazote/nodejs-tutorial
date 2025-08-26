const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('../routes/admin');

const router = express.Router();

router.get('/', (req, res, next) => {
	const { products } = adminData;
	res.render('shop', { products, pageTitle: 'Shop', path: '/'});
});

module.exports = router;
