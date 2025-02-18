const express= require('express');

const { handleGenetateNewShortURL,handleGetAnalytics } = require('../controller/url');
const router= express.Router();

router.post('/',handleGenetateNewShortURL);

router.get('/analytics/:shortId',handleGetAnalytics)

module.exports= router;