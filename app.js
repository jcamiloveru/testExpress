import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 5004;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola');
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '0000') {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
