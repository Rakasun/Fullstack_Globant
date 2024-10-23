const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/auth/github', async (req, res) => {
  const { code } = req.body;

  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        accept: 'application/json',
      },
    });

    const { access_token } = response.data;
    res.json({ token: access_token });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el token de acceso' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
