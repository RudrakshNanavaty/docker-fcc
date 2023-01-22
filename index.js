import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.status(200).send(`<h1>Hello ${process.env.WORLD}!</h1>`);
});

app.listen(port, () => console.log(`Listening on ${port}.`));
