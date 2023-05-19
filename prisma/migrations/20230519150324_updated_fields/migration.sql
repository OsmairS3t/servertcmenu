/*
  Warnings:

  - You are about to drop the column `order` on the `orders` table. All the data in the column will be lost.
  - Added the required column `order_number` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "order_number" TEXT NOT NULL,
    "place" TEXT,
    "cliente" TEXT,
    "amount" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_orders" ("amount", "cliente", "createdAt", "id", "place", "price", "productId", "updatedAt") SELECT "amount", "cliente", "createdAt", "id", "place", "price", "productId", "updatedAt" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
CREATE TABLE "new_ingredients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ingredients" ("createdAt", "description", "id", "price", "productId", "updatedAt") SELECT "createdAt", "description", "id", "price", "productId", "updatedAt" FROM "ingredients";
DROP TABLE "ingredients";
ALTER TABLE "new_ingredients" RENAME TO "ingredients";
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "active" TEXT NOT NULL DEFAULT 'Nao',
    "ingredients" TEXT,
    "time" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_products" ("active", "createdAt", "id", "image", "name", "price", "time", "updatedAt") SELECT "active", "createdAt", "id", "image", "name", "price", "time", "updatedAt" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
