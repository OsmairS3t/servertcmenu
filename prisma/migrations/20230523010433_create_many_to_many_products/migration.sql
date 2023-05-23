/*
  Warnings:

  - Made the column `productId` on table `ingredients` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "ingredientproduct" (
    "ingredientId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    PRIMARY KEY ("productId", "ingredientId"),
    CONSTRAINT "ingredientproduct_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ingredientproduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ingredients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "productId" TEXT NOT NULL
);
INSERT INTO "new_ingredients" ("createdAt", "description", "id", "price", "productId", "updatedAt") SELECT "createdAt", "description", "id", "price", "productId", "updatedAt" FROM "ingredients";
DROP TABLE "ingredients";
ALTER TABLE "new_ingredients" RENAME TO "ingredients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
