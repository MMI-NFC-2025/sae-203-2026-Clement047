import PocketBase from "pocketbase";

const POCKETBASE_URL = "http://127.0.0.1:8090";

let client;

export function getPocketBaseClient() {
    if (!client) {
        client = new PocketBase(POCKETBASE_URL);
        client.autoCancellation(false);
    }

    return client;
}

export function getCurrentUser() {
    return getPocketBaseClient().authStore.record;
}

export function isAuthenticated() {
    return getPocketBaseClient().authStore.isValid;
}