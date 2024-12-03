import React, { useState } from 'react';
import classes from './Order.module.css';

function Order() {
  const [coffeeType, setCoffeeType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could handle the order submission, e.g., send it to a server or update state
    alert(`Order placed: ${quantity} ${coffeeType}(s) for ${customerName}`);
  };

  return (
    <div className={classes.order_section}>
      <h1 className={classes.order_title}>Order Your Coffee</h1>
      <form onSubmit={handleSubmit} className={classes.order_form}>
        <div className={classes.form_group}>
          <label htmlFor="customerName" className={classes.label}>Your Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className={classes.input}
            required
          />
        </div>

        <div className={classes.form_group}>
          <label htmlFor="coffeeType" className={classes.label}>Coffee Type:</label>
          <select
            id="coffeeType"
            value={coffeeType}
            onChange={(e) => setCoffeeType(e.target.value)}
            className={classes.select}
            required
          >
            <option value="" disabled>Select your coffee</option>
            <option value="Espresso">Espresso</option>
            <option value="Latte">Latte</option>
            <option value="Cappuccino">Cappuccino</option>
            <option value="Americano">Americano</option>
            <option value="Mocha">Mocha</option>
          </select>
        </div>

        <div className={classes.form_group}>
          <label htmlFor="quantity" className={classes.label}>Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            className={classes.input}
            required
          />
        </div>

        <button type="submit" className={classes.order_button}>Place Order</button>
      </form>
    </div>
  );
}

export default Order;
