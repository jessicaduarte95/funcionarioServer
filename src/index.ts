import router from './Routes/funcionarioRouter';

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port: number = 5000;

app.use('/', router);

app.listen(port, () => {
	console.log(`Servidor Rodando na port ${port}.`);
});
