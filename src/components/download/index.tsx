import React from 'react';
import { download_csv } from '../../utils/requests/csv_files';

export default function DownloadDocumentBlock(props: {
    link: string,
    style: React.CSSProperties
}) {
    return (
        <article style={props.style}>
            <button
                className="button_link"
                onClick={
                    (event) => {
                        event.preventDefault();
                        download_csv(props.link).then((response) => {
                            const url = window.URL.createObjectURL(new Blob([response.data]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', 'file.csv'); //or any other extension
                            document.body.appendChild(link);
                            link.click();
                        })
                    }
                }
            >Скачать файл</button>
        </article>
    )
}