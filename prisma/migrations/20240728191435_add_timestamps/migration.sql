-- CreateTable
CREATE TABLE "survey" (
    "id" SERIAL NOT NULL,
    "q1" INTEGER NOT NULL,
    "q2" INTEGER NOT NULL,
    "q3" INTEGER NOT NULL,
    "q4" INTEGER NOT NULL,
    "q5" INTEGER NOT NULL,
    "q6" INTEGER NOT NULL,
    "q7" INTEGER NOT NULL,
    "q8" INTEGER NOT NULL,
    "q9" INTEGER NOT NULL,
    "q10" INTEGER NOT NULL,
    "summary" INTEGER NOT NULL,
    "age" TEXT,
    "education" TEXT,
    "ethnic" TEXT,
    "location" TEXT,
    "migrant" TEXT,
    "orientation" TEXT,
    "feedback" TEXT,
    "feedbackLike" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "survey_pkey" PRIMARY KEY ("id")
);
