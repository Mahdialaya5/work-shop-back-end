const express=require('express')

const router=express.Router()
const usercontroller=require("../controllers/UserController")
const { registerCheck,validator,loginCheck } = require('../middlewares/Validator')
const isAuth = require('../middlewares/IsAuth')
const IsAdmin=require('../middlewares/IsAdmin')
const Admincontroller=require('../controllers/Admincontroller')

router.post('/register',registerCheck(),validator,usercontroller.register)
router.post('/login',loginCheck(),validator,usercontroller.login)

router.get('/',isAuth(),usercontroller.current)// get current user 

router.patch('/:id',isAuth(),usercontroller.updateuser)
router.patch('/newpassword/:id',isAuth(),usercontroller.updatepassword)

//admin Route =>
router.delete('/admin/:id',isAuth(),IsAdmin,Admincontroller.deleteuser)

module.exports=router