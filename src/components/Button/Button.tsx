import React from "react";
import './Button.scss'

type ButtonProps = {
    children?: React.ReactNode;
    className: string;
    destination?: string;
    type?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export default function Button({children, className, destination, onClick}: ButtonProps): React.JSX.Element {
    const Component = destination ? 'a' : 'button';

    return (
        <Component onClick={onClick} href={destination} className={'button ' + className}>
            {children}
        </Component>
    );
}
