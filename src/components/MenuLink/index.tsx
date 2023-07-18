import React from "react";
import { Link } from "react-router-dom";
import styles from './MenuLink.module.css'

interface MenuLinkProps {
    children: string
}

export default function MenuLink({ children  } : MenuLinkProps) {
    return (
        <Link to='/drink' className={styles.link}> {children} </Link>
    )

}