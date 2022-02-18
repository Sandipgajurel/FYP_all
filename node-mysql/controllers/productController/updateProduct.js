const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.productupdate = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    try{
const id = req.params.id;
// let product = req.body;
// var query = "UPDATE product SET name=?,description=?,price=?,type=? WHERE id=?";
// conn.query(query,[req.body.name,req.body.description,req.body.price,req.body.type,id],(err,results)=>{
   
    const [rows] = await conn.execute("UPDATE products SET name=?,description=?,price=?,type=?,image=? WHERE id=?",[
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.type,
        req.body.image,
        id
    ]);
   
   if (rows.affectedRows === 1){
    return res.status(201).json({
        message: "The product has been successfully updated.",
    });
   }else{
       return res.status(404).json({message:"product id doesnot found"});
   }  
}
catch(err){
    next(err);
}
}

