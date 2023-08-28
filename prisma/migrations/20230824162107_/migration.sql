/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_userId_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_authorId_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_userId_fkey";

-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "email",
DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
