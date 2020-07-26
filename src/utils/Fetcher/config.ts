import dotenv from 'dotenv';
import data from '../../config/server';

dotenv.config();

const config: {
    protocol: string,
    domain: string,
    key: string,
    port: number
} = {
    protocol: "http",
    domain: data.host,
    port: data.port,
    key: "no-key",
}
export const base_url:string = `${config.protocol}://${config.domain}:${config.port}/`
export default config;