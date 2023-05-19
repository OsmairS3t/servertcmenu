/*
  Warnings:

  - You are about to drop the column `cliente` on the `orders` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "order_number" TEXT NOT NULL,
    "place" TEXT,
    "client" TEXT,
    "amount" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_orders" ("amount", "createdAt", "id", "order_number", "place", "price", "productId", "updatedAt") SELECT "amount", "createdAt", "id", "order_number", "place", "price", "productId", "updatedAt" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
