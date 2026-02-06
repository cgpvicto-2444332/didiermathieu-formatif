import { salutations, ajouterSalutation } from '../models/salutations.model.js';

export const getListe = (req, res) => {
    res.json(salutations);
};

// Fonction pour GET /api/salutations/hasard?langue=fr
export const getHasard = (req, res) => {
    const langue = req.query.langue;

    // Si une langue est fournie
    if (langue != null) {
        let salutationsFiltrees = [];
        let compteur = 0;

        for (let i = 0; i < salutations.length; i++) {
            if (salutations[i].code_langue === langue) {
                salutationsFiltrees[compteur] = salutations[i];
                compteur++;
            }
        }

        if (salutationsFiltrees.length === 0) {
            res.statusCode = 404;
            return res.json({
                message: "Erreur, le code de langue " + langue + " n'existe pas"
            });
        }

        // Sélection aléatoire
        const index = Math.floor(Math.random() * salutationsFiltrees.length);
        return res.json(salutationsFiltrees[index]);
    }

    const indexTotal = Math.floor(Math.random() * salutations.length);
    res.json(salutations[indexTotal]);
};

// Fonction pour POST /api/salutations
export const postSalutation = (req, res) => {
    // Vérifier que les champs sont présent
    if(!req.body.code_langue || !req.body.langue || !req.body.message) {
        return res.status(400).json({
            message: "Erreur, les paramètres code_langue, langue et message sont obligatoires"
        });
    }
    
    const nouvelleSalutation = {
        code_langue: req.body.code_langue,
        langue: req.body.langue,
        message: req.body.message
    };
    
    ajouterSalutation(nouvelleSalutation);
    
    res.json({
        message: "Salutation ajoutée",
        salutation: req.body.message
    });
};