const express = require('express');
const cors = require('cors');
const app = express();

const personasRoutes = require('./routes/personas.routes.js');


app.use(cors());
app.use(express.json());

//rutas
app.use('/personas', personasRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
