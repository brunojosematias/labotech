-- CreateTable
CREATE TABLE "completed_exercises" (
    "id" TEXT NOT NULL,
    "exercise" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "timer" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "completed_exercises_pkey" PRIMARY KEY ("id")
);
