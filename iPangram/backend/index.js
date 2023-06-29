const dotenv = require("dotenv")
dotenv.config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
console.log('process.env.PORT', process.env.PORT)
// Parse JSON bodies
const userRoutes = require("./routes")
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ipangram', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/apis/v1/user", userRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
