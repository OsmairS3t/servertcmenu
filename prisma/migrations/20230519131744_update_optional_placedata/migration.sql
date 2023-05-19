-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_places" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "id_user" TEXT,
    "client" TEXT
);
INSERT INTO "new_places" ("client", "description", "id", "id_user") SELECT "client", "description", "id", "id_user" FROM "places";
DROP TABLE "places";
ALTER TABLE "new_places" RENAME TO "places";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
