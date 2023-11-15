-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "verification_code" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_token" (
    "id" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "refresh_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anamnesis_form" (
    "id" TEXT NOT NULL,
    "gender" TEXT,
    "age" INTEGER,
    "weight" DOUBLE PRECISION,
    "height" DOUBLE PRECISION,
    "profession" TEXT,
    "sittingOrStanding" TEXT,
    "jointProblems" TEXT,
    "healthProblems" TEXT,
    "napeNeck" INTEGER,
    "upperBack" INTEGER,
    "lowerBack" INTEGER,
    "legs" INTEGER,
    "knees" INTEGER,
    "feetAndAnkles" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "anamnesis_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercises" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "demonstration" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CompletedExercisesId" TEXT NOT NULL,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NameExercises" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ExercisesId" TEXT NOT NULL,

    CONSTRAINT "NameExercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "completed_exercises" (
    "id" TEXT NOT NULL,
    "exercise" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "completed_exercises_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "refresh_token" ADD CONSTRAINT "refresh_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anamnesis_form" ADD CONSTRAINT "anamnesis_form_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_CompletedExercisesId_fkey" FOREIGN KEY ("CompletedExercisesId") REFERENCES "completed_exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NameExercises" ADD CONSTRAINT "NameExercises_ExercisesId_fkey" FOREIGN KEY ("ExercisesId") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "completed_exercises" ADD CONSTRAINT "completed_exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
