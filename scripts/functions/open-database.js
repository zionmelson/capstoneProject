import { openDB } from "idb";

export function openDatabase() {
  openDB("vacation-planner", 1, {
    upgrade(db) {
      db.createObjectStore("trips", {
        autoIncrement: true,
      });
    },
  });
}

export async function getTrip(key) {
  const db = await openDB("vacation-planner", 1);
  db.get("trips", key);
}

export async function storeTrip(tripInfo, key) {
  const db = await openDB("vacation-planner", 1);
  db.put("trips", tripInfo, key);
}
