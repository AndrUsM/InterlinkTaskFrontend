import React from 'react';
import { load_csv } from '../../utils/requests/csv_files';
import DownloadDocumentBlock from '../download';

export default function FileLoader(props: {
    compact?: boolean,
    text?: string,
    // input_ref: React.RefObject<HTMLInputElement>
}) {
    const default_text = "Нажмите что бы загрузить файл";
    let _text = props.text ? props.text : default_text;

    let [link, setLink] = React.useState('');
    let [text, setText] = React.useState(_text);
    let [display_download_block, setDisplayBlock] = React.useState<"none" | "block">("none");

    React.useEffect(() => {
        setTimeout(() => {
            setLink('');
            setText(default_text);
            setDisplayBlock('none');
        }, 6000 * 10)
    }, [])

    const input_ref: React.RefObject<HTMLInputElement> = React.createRef();

    return (
        <>
            <article
                className={
                    props.compact ? '' : 'input_drag_n_drop_wrapper'
                }
            >
                <div>
                    <input
                        key="0"
                        hidden
                        ref={input_ref}
                        type="file"
                        accept="text/**"
                        onChange={
                            () => {
                                setText(input_ref.current?.files?.item(0)?.name as string || props.text as string);
                                load_csv(input_ref.current?.files?.item(0) as File)
                                    .then((response) => {
                                        if (response.status === 200) {
                                            setLink(response.data.link);
                                            setDisplayBlock('block');
                                        } else {
                                            setLink('');
                                            setText(default_text);
                                            setDisplayBlock('none');
                                        }
                                    });
                            }
                        }
                    />
                    <p
                        onClick={
                            () => input_ref.current?.click()
                        }
                        className="text_align-center input_drag_n_drop input_drag_n_drop_select_option">
                        {text}
                    </p>
                </div>
                <DownloadDocumentBlock key="1" style={{ display: display_download_block }} link={link} />
            </article>
        </>
    )
}