const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Create a connection to the database
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'ethioCoffee',
    password: 'ethioCoffe123',
    database: 'coffeemenu',
    port: 3306  // MySQL default port
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.log('Db connection failed: ', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// Middleware to serve static files and parse JSON
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to get coffee list
app.get('/api/coffees', (req, res) => {
    const sql = 'SELECT * FROM coffees';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching coffee data:', err);
            return res.status(500).json({ success: false, message: 'Failed to fetch coffee data' });
        }
        res.json(results);
    });
});

// Route to get food list
app.get('/api/food', (req, res) => {
    const sql = 'SELECT * FROM food';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching food data:', err);
            return res.status(500).json({ success: false, message: 'Failed to fetch food data' });
        }
        res.json(results);
    });
});

// Route to add a new coffee
app.post('/api/coffees', (req, res) => {
    const { name, price, image_url } = req.body;
    const sql = 'INSERT INTO coffees (name, price, image_url) VALUES (?, ?, ?)';
    db.query(sql, [name, price, image_url], (err, result) => {
        if (err) {
            console.error('Error inserting coffee:', err);
            return res.status(500).json({ success: false, message: 'Failed to add coffee' });
        }
        res.status(200).json({ success: true, message: 'Coffee added successfully' });
    });
});

// Route to add a new food item
app.post('/api/food', (req, res) => {
    const { FName, Price, image_url } = req.body;
    const sql = 'INSERT INTO food (FName, Price, image_url) VALUES (?, ?, ?)';
    db.query(sql, [FName, Price, image_url], (err, result) => {
        if (err) {
            console.error('Error inserting food:', err);
            return res.status(500).json({ success: false, message: 'Failed to add food' });
        }
        res.status(200).json({ success: true, message: 'Food added successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
