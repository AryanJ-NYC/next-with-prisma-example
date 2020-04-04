# Migration `20200404134037`

This migration has been generated at 4/4/2020, 1:40:37 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Movie" (
    "director" TEXT NOT NULL  ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "movieName" TEXT NOT NULL  ,
    "yearReleased" TEXT NOT NULL  
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200404134037
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,15 @@
+datasource db {
+  provider = "sqlite"
+  url      = "file:./dev.db"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Movie {
+  id           Int    @default(autoincrement()) @id
+  director     String
+  movieName    String
+  yearReleased String
+}
```


