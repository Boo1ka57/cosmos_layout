import Link from 'next/link';
import styles from './style.module.scss';
import React, {ReactNode} from "react";
import {element} from "prop-types";
import cl from 'classnames';

interface TitleProps {
    children: ReactNode,
    size?: 'Medium' | 'Large',
}

export const Title: React.FC<TitleProps> = ({
                                                size,
                                                children
 }) => {
    console.log(size)
    return (
        <h2 className={cl(styles.title, styles[`title${size}`])}>
            {children}
        </h2>
    )
}
