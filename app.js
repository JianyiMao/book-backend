const express = require('express');
const cors = require('cors');
const app = express();


// routes
const books = require('./routes/api/books');

const connectDB = require('./config/db');

// Connect Database
connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));
// Init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));
// use Routes
app.use('/api/books', books);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

// mjia419
// mjy123mjy