

const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.productsView = async (req,res,next) => {
try{
const id = req.params.id;
const [row] = await conn.execute("SELECT * FROM products WHERE id=?",[id]);

if(row.length > 0){
    return res.json({
        products:row[0]
    });
}

res.json({
    message:"No product found"
});


} catch(err){
    next(err);
}
}

