import PocketBase from "pocketbase";

const pb = new PocketBase("http://sae203.chorussymphonia.bertrand.optimiseus.fr:443");

export function getImageUrl(record, fileName) {
    return pb.files.getURL(record, fileName);
}

// 1. Liste de tous les artistes triés par date de représentation
export async function getArtistesByDate() {
    try {
        const records = await pb.collection("representation").getFullList({
            sort: "date_representation",
            expand: "artiste,scene",
        });
        return records;
    } catch (error) {
        console.error("Erreur getArtistesByDate :", error);
        return [];
    }
}

// 2. Liste de toutes les scènes triées par nom
export async function getScenesByName() {
    try {
        const records = await pb.collection("scenes").getFullList({
            sort: "nom",
        });
        return records;
    } catch (error) {
        console.error("Erreur getScenesByName :", error);
        return [];
    }
}

// 3. Liste de tous les artistes triés par ordre alphabétique
export async function getArtistesAlphabetique() {
    try {
        const records = await pb.collection("artistes").getFullList({
            sort: "nom",
        });
        return records;
    } catch (error) {
        console.error("Erreur getArtistesAlphabetique :", error);
        return [];
    }
}

// 4. Infos d’un artiste par id
export async function getArtisteById(id) {
    try {
        const record = await pb.collection("artistes").getOne(id);
        return record;
    } catch (error) {
        console.error("Erreur getArtisteById :", error);
        return null;
    }
}

// 5. Infos d’une scène par id
export async function getSceneById(id) {
    try {
        const record = await pb.collection("scenes").getOne(id);
        return record;
    } catch (error) {
        console.error("Erreur getSceneById :", error);
        return null;
    }
}

// 6. Tous les artistes d’une scène donnée par son id, triés par date
export async function getArtistesBySceneId(sceneId) {
    try {
        const records = await pb.collection("representation").getFullList({
            filter: `scene="${sceneId}"`,
            sort: "date_representation",
            expand: "artiste,scene",
        });
        return records;
    } catch (error) {
        console.error("Erreur getArtistesBySceneId :", error);
        return [];
    }
}

// 7. Tous les artistes d’une scène donnée par son nom, triés par date
export async function getArtistesBySceneName(sceneName) {
    try {
        const scenes = await pb.collection("scenes").getFullList({
            filter: `nom="${sceneName}"`,
        });

        if (!scenes.length) return [];

        const sceneId = scenes[0].id;

        const records = await pb.collection("representation").getFullList({
            filter: `scene="${sceneId}"`,
            sort: "date_representation",
            expand: "artiste,scene",
        });

        return records;
    } catch (error) {
        console.error("Erreur getArtistesBySceneName :", error);
        return [];
    }
}

// 8. Ajouter un artiste
export async function addArtiste(data) {
    try {
        const record = await pb.collection("artistes").create(data);
        return record;
    } catch (error) {
        console.error("Erreur addArtiste :", error);
        return null;
    }
}

// 9. Modifier un artiste
export async function updateArtiste(id, data) {
    try {
        const record = await pb.collection("artistes").update(id, data);
        return record;
    } catch (error) {
        console.error("Erreur updateArtiste :", error);
        return null;
    }
}

// 10. Ajouter une scène
export async function addScene(data) {
    try {
        const record = await pb.collection("scenes").create(data);
        return record;
    } catch (error) {
        console.error("Erreur addScene :", error);
        return null;
    }
}

// 11. Modifier une scène
export async function updateScene(id, data) {
    try {
        const record = await pb.collection("scenes").update(id, data);
        return record;
    } catch (error) {
        console.error("Erreur updateScene :", error);
        return null;
    }
}