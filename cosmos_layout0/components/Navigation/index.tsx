import Link from 'next/link';
import styles from './style.module.scss';
import {Fragment} from "react";
import cl from 'classnames';

interface NavigationProps {
}

const links = [
    {
        id: 1,
        title: 'Home',
        href: '/',
        active: true
    }

    ,
    {
        id: 2,
        title: 'Factions',
        href: '/',
        active: false
    }
    ,
    {
        id: 3,
        title: 'Roadmap',
        href: '/',
        active: false
    }
];

export const Navigation: React.FC<NavigationProps> = ({}) => {
    return (
        <nav className={styles.navigation}>
            {links.map((link, id) => (
                <Fragment key={link.id}>
                    <Link
                        className={cl(styles.navigationLink, link.active && styles.navigationLinkActive)}
                        href={link.href}
                    >
                        {link.title}
                    </Link>
                    {id < links.length - 1 && (
                        <span className={styles.navigationStar}/>
                    )}
                </Fragment>
            ))}

        </nav>
    );
}
