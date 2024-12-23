const express = require('express');
const app = express();
const myEnv = require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(port, () => {
  console.log(`Server side code running on port ${port}.`);
});
