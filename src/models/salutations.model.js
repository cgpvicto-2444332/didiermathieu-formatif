import pool from '../config/db.js';

const ajouterSalutation = async (nouvelleSalutation) => {
    const requete = `INSERT INTO salutations (code_langue, langue, message) VALUES (?, ?, ?)`;
    const params = [nouvelleSalutation.code_langue, nouvelleSalutation.langue, nouvelleSalutation.message];
    
    try {
        const [resultats] = await pool.query(requete, params);
        return resultats ?? null;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
        throw erreur;
    }
};

const getListeSalutation = async () => {
    const requete = `SELECT code_langue, langue, message FROM salutations`;

    try {
        const [resultats] = await pool.query(requete);
        return resultats ?? null;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
}

const getSalutationsParLangue = async (codeLangue) => {
    const requete = `SELECT code_langue, langue, message FROM salutations WHERE code_langue = ?`;
    const params = [codeLangue];
    
    try {
        const [resultats] = await pool.query(requete, params);
        return resultats ?? null;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
        throw erreur;
    }
};

export { 
    ajouterSalutation,
    getListeSalutation,
    getSalutationsParLangue
};