import express from "express";

import {
  placeOrder,
  getMyOrders,
  getAllOrders,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/place", protect, placeOrder);

router.get("/myorders", protect, getMyOrders);

// ✅ ADMIN ORDERS
router.get("/all", protect, getAllOrders);

export default router;