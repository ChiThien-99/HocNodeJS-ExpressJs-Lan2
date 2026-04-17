const express=require("express");
const router=express.Router();
const prefix="/products";
const productsController=require("./products.controller");
router.get(prefix,productsController.getAllProducts);
router.get(`${prefix}/detail/:id`,productsController.getDetailProductById)
module.exports=router;