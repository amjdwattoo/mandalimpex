const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.send({ message: 'MANDALIMPEX API running!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
