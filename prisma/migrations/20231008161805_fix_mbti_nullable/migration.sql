-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_mbtiType_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "mbtiType" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_mbtiType_fkey" FOREIGN KEY ("mbtiType") REFERENCES "Mbti"("type") ON DELETE SET NULL ON UPDATE CASCADE;
