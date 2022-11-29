import Link from 'next/link';
import styles from './style.module.scss';
import React from "react";
import {ReactNode} from "react";
import cl from 'classnames';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode,
    size: 'Small' | 'Medium' | 'Rofl'
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  onClick,
                                                  size
                                              }) => {
    return (
        <button
            className={cl(styles.button, styles[`button${size}`])}
            onClick={onClick}
        >
            {children}
        </button>
    )
}




