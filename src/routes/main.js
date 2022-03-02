const express = require ('express');
const router = express.Router();
const mainController = require ('../controllers/mainControllers.js');
const adminMiddlewares = require ('../middlewares/adminMiddlewares');

router.get('/', mainController.index);
router.get('/admin', adminMiddlewares, mainController.admin);

module.exports = router;