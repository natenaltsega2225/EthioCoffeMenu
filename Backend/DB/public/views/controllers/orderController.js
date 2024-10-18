const db = require('../config/db');
const stripe = require('stripe')('your-stripe-secret-key');

// Function to place an order
exports.placeOrder = async (req, res) => {
  const { food_id, quantity } = req.body;

  try {
    // Get the price from the database
    const [food] = await db.execute('SELECT Price FROM food WHERE id = ?', [food_id]);
    const price = food[0].Price;
    const total_price = price * quantity;

    // Insert order into orders table
    await db.execute(
      'INSERT INTO orders (food_id, quantity, total_price, order_status) VALUES (?, ?, ?, ?)',
      [food_id, quantity, total_price, 'pending']
    );

    res.redirect('/order');
  } catch (err) {
    console.error('Error placing order:', err);
    res.status(500).json({ message: 'Error placing order' });
  }
};

// Function to create a payment intent for Stripe
exports.createPaymentIntent = async (req, res) => {
  const { amount } = req.body; // total_price from the order

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to smallest currency unit
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Error creating payment intent:', err);
    res.status(500).json({ message: 'Error creating payment intent' });
  }
};

// Function to update order status
exports.updateOrderStatus = async (req, res) => {
  const { order_id, status } = req.body;

  try {
    await db.execute('UPDATE orders SET order_status = ? WHERE order_id = ?', [status, order_id]);
    res.status(200).json({ message: 'Order status updated successfully' });
  } catch (err) {
    console.error('Error updating order status:', err);
    res.status(500).json({ message: 'Error updating order status' });
  }
};
