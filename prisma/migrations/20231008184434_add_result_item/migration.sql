/*
  Warnings:

  - Added the required column `career` to the `Mbti` table without a default value. This is not possible if the table is not empty.
  - Added the required column `development` to the `Mbti` table without a default value. This is not possible if the table is not empty.
  - Added the required column `love` to the `Mbti` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relationship` to the `Mbti` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Mbti` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mbti" ADD COLUMN     "career" TEXT NOT NULL,
ADD COLUMN     "development" TEXT NOT NULL,
ADD COLUMN     "love" TEXT NOT NULL,
ADD COLUMN     "relationship" TEXT NOT NULL,
ADD COLUMN     "summary" TEXT NOT NULL;
