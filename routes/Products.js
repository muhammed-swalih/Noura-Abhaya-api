import {
  addProducts,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/ProductController.js";

import express from "express";

const router = express();

//post
router.post("/addproduct", addProducts);

//getAll
router.get("/getproducts", getProducts);

//get product by id
router.get("/getproduct/:id", getProductById);

//delete product by id 
router.delete("/deleteproduct/:id",deleteProduct)

//update product by id
router.put('/updateproduct/:id',updateProduct)

export default router;
