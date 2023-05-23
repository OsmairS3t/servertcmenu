/*
  Warnings:

  - You are about to drop the column `ingredients` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ingredientproduct" ADD COLUMN "amount" INTEGER;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ingredients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "price" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ingredients" ("createdAt", "description", "id", "price", "updatedAt") SELECT "createdAt", "description", "id", "price", "updatedAt" FROM "ingredients";
DROP TABLE "ingredients";
ALTER TABLE "new_ingredients" RENAME TO "ingredients";
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT,
    "active" TEXT NOT NULL DEFAULT 'Nao',
    "time" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_products" ("active", "createdAt", "id", "image", "name", "price", "time", "updatedAt") SELECT "active", "createdAt", "id", "image", "name", "price", "time", "updatedAt" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
