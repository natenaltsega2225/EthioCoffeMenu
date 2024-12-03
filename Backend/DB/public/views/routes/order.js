const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Order page route
router.get('/', (req, res) => {
  res.render('order');
});

// Place order (handles form submission)
router.post('/place-order', orderController.placeOrder);

// Create payment intent (for Stripe)
router.post('/create-payment-intent', orderController.createPaymentIntent);

// Update order status after payment
router.post('/update-order-status', orderController.updateOrderStatus);

module.exports = router;
