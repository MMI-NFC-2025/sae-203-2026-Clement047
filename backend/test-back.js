import {
    getArtistesByDate,
    getScenesByName,
    getArtistesAlphabetique,
    getArtisteById,
    getSceneById,
    getArtistesBySceneId,
    getArtistesBySceneName,
} from "./backend.mjs";

// 1
try {
    const records = await getArtistesByDate();
    console.table(
        records.map((r) => ({
            artiste: r.expand?.artiste?.nom,
            scene: r.expand?.scene?.nom,
            date: r.date_representation,
            heure: r.heure_representation,
        })),
    );
} catch (e) {
    console.error(e);
}

// 2
/*
try {
    const records = await getScenesByName();
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

// 3
/*
try {
    const records = await getArtistesAlphabetique();
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

// 4
/*
try {
    const record = await getArtisteById("ID_ARTISTE");
    console.log(record);
} catch (e) {
    console.error(e);
}
*/

// 5
/*
try {
    const record = await getSceneById("ID_SCENE");
    console.log(record);
} catch (e) {
    console.error(e);
}
*/

// 6
/*
try {
    const records = await getArtistesBySceneId("ID_SCENE");
    console.table(
        records.map((r) => ({
            artiste: r.expand?.artiste?.nom,
            date: r.date_representation,
            heure: r.heure_representation,
        })),
    );
} catch (e) {
    console.error(e);
}
*/

// 7
/*
try {
    const records = await getArtistesBySceneName("Scène principale");
    console.table(
        records.map((r) => ({
            artiste: r.expand?.artiste?.nom,
            date: r.date_representation,
            heure: r.heure_representation,
        })),
    );
} catch (e) {
    console.error(e);
}
*/