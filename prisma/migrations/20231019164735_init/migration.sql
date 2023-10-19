-- CreateTable
CREATE TABLE "User1" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateUt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User1_username_key" ON "User1"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User1_email_key" ON "User1"("email");
