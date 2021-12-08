-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Code" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL
);
INSERT INTO "new_Code" ("id", "number") SELECT "id", "number" FROM "Code";
DROP TABLE "Code";
ALTER TABLE "new_Code" RENAME TO "Code";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
