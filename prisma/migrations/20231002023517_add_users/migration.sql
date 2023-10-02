-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "mbtiType" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_mbtiType_fkey" FOREIGN KEY ("mbtiType") REFERENCES "Mbti"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
