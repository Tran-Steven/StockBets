-- CreateTable
CREATE TABLE "AccountStats" (
    "username" VARCHAR(50) NOT NULL,
    "lifetimepoints" INTEGER NOT NULL,
    "totalguesses" INTEGER NOT NULL,
    "correctguesses" INTEGER NOT NULL,
    "leagueswon" INTEGER NOT NULL,
    "weeklyrank" VARCHAR(12) NOT NULL,
    "peakrank" VARCHAR(12) NOT NULL,
    "recentrank" VARCHAR(12) NOT NULL,

    CONSTRAINT "AccountStats_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Logincreds" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,

    CONSTRAINT "Logincreds_pkey" PRIMARY KEY ("id")
);
