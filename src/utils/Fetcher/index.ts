// AxiosRequestConfig
import axios from 'axios';
import { base_url } from './config';

export enum FETCHER_MODE {
    NO_TOKEN,
    IMAGE,
    NO_HEADER
}

export default class Fetcher {
    token(mode: FETCHER_MODE) {
        switch (mode) {
            case FETCHER_MODE.NO_TOKEN:
                return {
                    "Content-Type": "application/json"
                }
            case FETCHER_MODE.IMAGE:
                return {
                    'Content-Type': 'multipart/form-data'
                }
            case FETCHER_MODE.NO_HEADER:
                return {}
            default:
                return {
                    "Content-Type": "application/json"
                }
        }
    }

    get(path: string, mode?: FETCHER_MODE) {
        return axios({
            method: "GET",
            url: `${base_url}${path}`,
            headers: this.token(mode as FETCHER_MODE),
        })
    }

    download(path: string, mode?: FETCHER_MODE) {
        return axios({
            method: "GET",
            url: `${base_url}${path}`,
            headers: this.token(mode as FETCHER_MODE),
            responseType: 'blob'
        })
    }

    post(path: string, data: any, mode?: FETCHER_MODE, binary?: boolean) {
        return (
            binary ? (
                axios({
                    method: "POST",
                    url: `${base_url}${path}`,
                    headers: this.token(mode as FETCHER_MODE),
                    data: data
                })
            ) : (
                    axios({
                        method: "POST",
                        url: `${base_url}${path}`,
                        headers: this.token(mode as FETCHER_MODE),
                        data: JSON.stringify(data)
                    })
                )
        )
    }
    put(path: string, data: any, mode?: FETCHER_MODE) {
        return axios({
            method: "PUT",
            url: `${base_url}${path}`,
            headers: this.token(mode as FETCHER_MODE),
            data: JSON.stringify(data)
        })
    }

    delete(path: string, data: any, mode?: FETCHER_MODE) {
        return axios({
            method: "DELETE",
            url: `${base_url}${path}`,
            headers: this.token(mode as FETCHER_MODE),
            data: JSON.stringify(data)
        })
    }
    head(path: string, mode?: FETCHER_MODE) {
        return axios({
            method: 'HEAD',
            url: path,
            headers: this.token(mode as FETCHER_MODE)
        })
    }
}