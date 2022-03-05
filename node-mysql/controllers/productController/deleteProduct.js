const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.deleteproduct = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    try{
const productId = req.params.productId;
// var query = "DELETE FROM product WHERE id=?";
// conn.query(query,[id],
    const [rows] = await conn.execute("DELETE FROM products WHERE productId=?",[productId]);
    // (err,results)=>{
    // if(!err){
        if(rows.affectedRows === 1){
            return res.status(200).json({message:"product DELETED sucessfully"}); 
        }
        return res.status(404).json({message:"product id doesnot found"});
    
//}
    // else{
    //     return res.status(500).json(err);
    // }
//}

}
catch(err){
    next(err);
}
}

