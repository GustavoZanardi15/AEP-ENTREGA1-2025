const express = require('express');
const cors = require('cors');
const coletaRoutes = require('./routes/coletaRoutes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/coletas', coletaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
