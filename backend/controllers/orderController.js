import Order from "../models/Order.js";

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
    await User.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Placing orders using Stripe Method

const placeOrderStripe = async (req, res) => {};

// Placing orders using Razorpay Method

const placeOrderRazorpay = async (req, res) => {};

// All Orders data for Admin panel

const allOrders = async (req, res) => {};

// User Order Data fro frontend

const userOrders = async (req, res) => {};

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
