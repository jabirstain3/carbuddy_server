import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DB_URL,
    salt_round: process.env.BCRYPT_SALT_ROUND,
    jwt_access_token: process.env.JWT_ACCESS_TOKEN,
    jwt_access_expires: process.env.JWT_ACCESS_EXPIRES,
    jwt_refresh_token: process.env.JWT_REFRESH_TOKEN,
    jwt_refresh_expires: process.env.JWT_REFRESH_EXPIRES,
};