import Fetcher, { FETCHER_MODE } from "../Fetcher";

const base_prefix = 'api/csv';

export async function load_csv(file: File) {
    let formData = new FormData();
    formData.append('document', file);
    return new Fetcher().post
        (
            base_prefix,
            formData,
            FETCHER_MODE.NO_TOKEN, true
        )
}

export async function download_csv(link:string){
    return new Fetcher().get(link);
}