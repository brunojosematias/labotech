-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anamnesis_form" (
    "id" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "physicalActivity" BOOLEAN NOT NULL,
    "pains" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "smoker" BOOLEAN NOT NULL,
    "healthProblem" BOOLEAN NOT NULL,
    "sedentary" TEXT NOT NULL,
    "painLevel" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "anamnesis_form_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "anamnesis_form" ADD CONSTRAINT "anamnesis_form_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
