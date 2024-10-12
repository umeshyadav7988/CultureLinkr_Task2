const express = require('express');
const app = express();
app.use(express.json());
app.post('/api/total', (req, res) => {
  const { items } = req.body; 
  let total = 0;
  items.forEach((item) => {
    if (item.price && item.quantity) {
total += item.price * item.quantity;
    }
  });
  res.json({ total });
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running`);
});
