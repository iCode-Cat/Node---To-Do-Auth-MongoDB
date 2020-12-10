const { Router } = require('express');
const indexController = require('../controller/indexConroller')

const router = Router();

router.get('/' , indexController.main_get)
router.post('/' , indexController.main_post)
router.get('/data' , indexController.data_get)
router.post('/data' , indexController.data_post)
//Register and login
router.get('/register' , indexController.register_get)
router.post('/register' , indexController.register_post)
router.get('/login' , indexController.login_get)
router.post('/login' , indexController.login_post)

module.exports = router
