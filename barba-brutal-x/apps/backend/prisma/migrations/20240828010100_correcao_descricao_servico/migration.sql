/*
  Warnings:

  - You are about to drop the column `decricao` on the `servicos` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_servicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "qtdeSlots" INTEGER NOT NULL,
    "imagemURL" TEXT NOT NULL
);
INSERT INTO "new_servicos" ("id", "imagemURL", "nome", "preco", "qtdeSlots") SELECT "id", "imagemURL", "nome", "preco", "qtdeSlots" FROM "servicos";
DROP TABLE "servicos";
ALTER TABLE "new_servicos" RENAME TO "servicos";
CREATE UNIQUE INDEX "servicos_nome_key" ON "servicos"("nome");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
