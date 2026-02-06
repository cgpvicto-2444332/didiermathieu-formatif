import express from 'express';
import salutationsRouter from './src/routes/salutations.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: "Bienvenue à l'API de salutations!" });
});

app.use('/api/salutations', salutationsRouter);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});