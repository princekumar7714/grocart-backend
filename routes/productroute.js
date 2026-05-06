import { createProduct, deleteProduct, getProducts, getSingleProduct,  updateProduct}  from "../controllers/productcontroller.js";
import express from "express";
const router = express.Router();

router.post("/createproduct", createProduct);
router.get("/getallproducts", getProducts);
router.get("/getsingleproduct/:id", getSingleProduct);
router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);
export default router; 