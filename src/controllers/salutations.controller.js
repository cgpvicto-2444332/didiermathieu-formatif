import { getSalutationsParLangue, ajouterSalutation, getListeSalutation } from '../models/salutations.model.js';

export const getListe = async (req, res) => {
    try {
        const salutations = await getListeSalutation();
        res.json(salutations);
    } catch (erreur) {
        res.status(500);
        res.send({
            message: "Erreur lors de la récupération des salutations"
        });
        return;
    }
};

export const postSalutation = async (req, res) => {
    if(!req.body.code_langue || !req.body.langue || !req.body.message) {
        res.status(400);
        res.send({
            message: "Erreur, les paramètres code_langue, langue et message sont obligatoires"
        });
        return;
    }
    
    const nouvelleSalutation = {
        code_langue: req.body.code_langue,
        langue: req.body.langue,
        message: req.body.message
    };
    
    try {
        await ajouterSalutation(nouvelleSalutation);
        
        res.json({
            message: "Salutation ajoutée",
            salutation: req.body.message
        });
    } catch (erreur) {
        res.status(500);
        res.send({
            message: "Erreur lors de l'ajout de la salutation"
        });
        return;
    }
};

export const getListeParLangue = async (req, res) => {
    const codeLangue = req.params.code_langue;
    
    if (codeLangue !== 'fr' && codeLangue !== 'en' && codeLangue !== 'es' && codeLangue !== 'de') {
        res.status(400);
        res.send({
            message: "Code de langue invalide. Les codes valides sont : fr, en, es, de"
        });
        return;
    }
    
    try {
        const salutations = await getSalutationsParLangue(codeLangue);
        
        if (salutations === null || salutations.length === 0) {
            res.status(404);
            res.send({
                message: `Aucune salutation trouvée pour le code de langue : ${codeLangue}`
            });
            return;
        }
        
        res.json(salutations);
    } catch (erreur) {
        res.status(500);
        res.send({
            message: "Erreur lors de la récupération des salutations"
        });
        return;
    }
};