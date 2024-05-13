import { config } from 'dotenv'

config();

export const geoKey = process.ENV.GEO_USER;
export const ipKey = process.env.IP_TOKEN;
export const OWKey = process.env.OW_API;
