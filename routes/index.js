var express = require('express');
var router = express.Router();
var rankController = require('../controller/rankController');

/* GET home page. */
router.get('/', rankController.getMain);
router.get('/:league', rankController.getRank);

module.exports = router;