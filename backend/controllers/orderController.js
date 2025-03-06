import Order from "../models/Order.js";
import User from "../models/User.js";

// Placing orders using COD Method

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new Order(orderData);
    await newOrder.save();
    const result = await User.findByIdAndUpdate(userId, { cartData: {} });
    console.log(result);

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: error.message });
  }
};

// Placing orders using Stripe Method

const placeOrderStripe = async (req, res) => {};

// Placing orders using Razorpay Method

const placeOrderRazorpay = async (req, res) => {};

// All Orders data for Admin panel

const allOrders = async (req, res) => {};

// User Order Data fro frontend

const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await Order.find({ userId });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: error.message });
  }
};

// update order status from Admin panel

const updateStatus = async (req, res) => {};

export {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  userOrders,
};
