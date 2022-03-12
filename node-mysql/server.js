const router = require('express').Router();
const {body} = require('express-validator');
//user
const {register} = require('./controllers/userController/userRegister');
const {login} = require('./controllers/userController/userLogin');
const {getUser} = require('./controllers/userController/getUser');
const {deleteuser} = require('./controllers/userController/deleteUser');
const {userupdate} = require('./controllers/userController/updateUser');
//products
const {products} = require('./controllers/productController/addProduct');
const {productsView} = require('./controllers/productController/viewProduct');
const {productupdate} = require('./controllers/productController/updateProduct');
const {deleteproduct} = require('./controllers/productController/deleteProduct');
//orders
const {ordersView} = require('./controllers/orderController/viewOrder');
const {orderupdate} = require('./controllers/orderController/updateOrder');
const {deleteorder} = require('./controllers/orderController/deleteOrder');
const { application } = require('express');
const db_connection = require('./dbConnection');


//user
router.post('/register', [
    body('name',"The name must be of minimum 3 characters length")
    .notEmpty()
    .escape()
    .trim()
    .isLength({ min: 3 }),
    body('email',"Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], register);


router.post('/login',[
    body('email',"Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
],login);

router.get('/getuser/:userId',getUser);
router.delete('/deleteuser/:userId',deleteuser);
router.patch('/userupdate/:userId',userupdate);


//product
router.post('/product/create',[
    body('name',"enter product name")
    .notEmpty()
    ],products);

//router.get ('/getproduct',productsView);
//we can also write like this:
// router.get ('/getproduct',(req,res,next)=>{
router.get('/getproduct',(req,res) =>{    
var query = "select * from products";
    db_connection.query(query,(err,results)=>{
        if(!err){
            return res.send(results);
        }
        else{
            return res.status(500).json(err);
        }

})}
)


router.get ('/getproductwithid/:productId', productsView);
router.put('/updateproduct/:productId', productupdate);
router.delete('/deleteproduct/:productId', deleteproduct);

//orders
router.get ('/getorder/:orderId',ordersView);
router.patch('/updateorder/:orderId', orderupdate);
router.delete('/deleteorder/:orderId', deleteorder);


module.exports = router;