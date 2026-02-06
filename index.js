import express from 'express';
import salutationsRouter from './src/routes/salutations.route.js';

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: "Bienvenue à l'API de salutations!" });
});

app.use('/api/salutations', salutationsRouter);

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});