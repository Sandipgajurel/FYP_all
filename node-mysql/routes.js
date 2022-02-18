const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('./controllers/userController/userRegister');
const {login} = require('./controllers/userController/userLogin');
const {getUser} = require('./controllers/userController/getUser');
const {products} = require('./controllers/productController/addProduct');
const {productsView} = require('./controllers/productController/viewProduct');
const {productupdate} = require('./controllers/productController/updateProduct');
const {deleteproduct} = require('./controllers/productController/deleteProduct');

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

router.get('/getuser',getUser);

router.post('/product/create',[
    body('name',"enter product name")
    .notEmpty()
    ],products);

    router.get ('/getproduct/:id',productsView);
//we can also write like this:
// router.get ('/getproduct',(req,res,next)=>{
//     var query = "select * from product";
//     conn.query(query,(err,results)=>{
//         if(!err){
//             return res.status(200).json(results);
//         }
//         else{
//             return res.status(500).json(err);
//         }
//     })
//     });

router.patch('/updateproduct/:id', productupdate);

router.delete('/deleteproduct/:id', deleteproduct);

module.exports = router;