const default_value = {
    host: process.env.REACT_APP_SERVER_HOST ? process.env.REACT_APP_SERVER_HOST : 'localhost',
    port: process.env.REACT_APP_SERVER_PORT ? +process.env.REACT_APP_SERVER_PORT : 5000
}

const data: {
    host: string,
    port: number
} = {
    host: default_value.host,
    port: default_value.port
}

export default data;