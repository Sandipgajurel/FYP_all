const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.ordersView = async (req,res,next) => {
try{
const orderId = req.params.orderId;
const [row] = await conn.execute("SELECT * FROM orders WHERE orderId=?",[][orderId]);

if(row.length > 0){
    return res.json({
        products:row[0]
    });
}

res.json({
    message:"No orders found"
});


} catch(err){
    next(err);
}
}

