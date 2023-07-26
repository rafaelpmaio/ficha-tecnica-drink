import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from './MenuLink.module.css'

interface MenuLinkProps {
    hrefPage: string,
    children: string
}

export default function MenuLink({ hrefPage, children }: MenuLinkProps) {
    const location = useLocation();

    return (
        <Link
            to={hrefPage}
            className={`
                ${location.pathname === '/' ? styles.link : '' }    
                ${styles.link}`}
        >
            {children}
        </Link>
    )

}