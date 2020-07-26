import React from 'react';
import FileLoader from '../loader/loader';

export default function Form() {
    return (
        <form className="form__wrapper" action="">
            <FileLoader text="Нажмите что бы загрузить csv file"/>
        </form>
    )
}