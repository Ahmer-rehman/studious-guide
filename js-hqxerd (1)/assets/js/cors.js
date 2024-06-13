const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/example', (req, res) => {
  res.json({ message: 'This is a CORS-enabled response' });
});

app.listen(5000, () => {
  console.log('Server is running on port 3000');
});
