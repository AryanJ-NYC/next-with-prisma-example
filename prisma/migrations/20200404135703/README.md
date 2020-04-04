# Migration `20200404135703`

This migration has been generated at 4/4/2020, 1:57:03 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Movie" (
    "director" TEXT NOT NULL  ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "movieName" TEXT NOT NULL  ,
    "yearReleased" INTEGER NOT NULL  
) 

INSERT INTO "quaint"."new_Movie" ("director", "id", "movieName", "yearReleased") SELECT "director", "id", "movieName", "yearReleased" FROM "quaint"."Movie"

DROP TABLE "quaint"."Movie";

ALTER TABLE "quaint"."new_Movie" RENAME TO "Movie";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200404134037..20200404135703
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url      = "file:./dev.db"
 }
 generator client {
   provider = "prisma-client-js"
@@ -10,6 +10,6 @@
 model Movie {
   id           Int    @default(autoincrement()) @id
   director     String
   movieName    String
-  yearReleased String
+  yearReleased Int
 }
```


