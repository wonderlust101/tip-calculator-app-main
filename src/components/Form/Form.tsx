import React from "react";

import './Form.scss'

import Button from "../Button/Button.tsx";

type FormProps = {
    children?: React.ReactNode;
    className?: string;
    legend?: string;
    submitLabel: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({children, className, legend, submitLabel, onSubmit}: FormProps) {
    return (
        <form className={"form " + className} onSubmit={onSubmit} noValidate>
            <fieldset className="form__fieldset">
                {legend ? <legend className="legend">{legend}</legend> : <></>}

                {children}
            </fieldset>

            <Button className='button button--cyan' type="submit">{submitLabel}</Button>
        </form>
    )
}