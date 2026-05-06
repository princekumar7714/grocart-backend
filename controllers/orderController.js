import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  try {
    const { items, address, totalAmount } = req.body;
    if (!items || items.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    const order = await Order.create({
      user: req.user._id,
      items, address, totalAmount,
      paymentMethod: "COD",
      status: "Pending",
    });
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};