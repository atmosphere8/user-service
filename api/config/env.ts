const raw_jwt_secret = process.env.JWT_SECRET;

const raw_postgres_url = process.env.POSTGRES_URL;

export const port = Number(process.env.PORT || 3000);

if (!raw_jwt_secret) {
  throw new Error("🔴 JWT_SECRET missing");
}

if (!raw_postgres_url) {
  throw new Error("🔴 POSTGRES_URL missing");
}

if (!port) {
  throw new Error("🔴 PORT missing");
}

export const jwt_secret = raw_jwt_secret as string;

export const postgres_url = raw_postgres_url as string;
