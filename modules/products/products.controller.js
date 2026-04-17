require("../../models/category.model");
const ResponseType=require("../../dto/response.type");
const productEntity=require("../../models/products.model");

exports.getAllProducts=async(req,res)=>{
  let products=await productEntity.find().populate("category");
  res.render("products/index.ejs",{products});
}
exports.getDetailProductById=async (req,res)=>{
    let {id}=req.params;
    let product=await productEntity.findById(id).populate("category");
    res.render("products/detail.ejs",{product});
}