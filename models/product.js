var mongoose=require("mongoose");
var productSchema =mongoose.Schema({
    name:String,
    service:String
});
const Product=mongoose.model("Product",productSchema);
module.exports=Product;