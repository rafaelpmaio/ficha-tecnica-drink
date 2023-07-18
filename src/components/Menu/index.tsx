import React from "react";
import PaginaInicial from "../../pages/PaginaInicial";
import { Link, useLocation } from "react-router-dom";
import MenuLink from "../MenuLink";

export default function Menu() {

    const location = useLocation();

    return (
        <header>
            <nav>
                <MenuLink> Teste </MenuLink>
                <MenuLink> Collection </MenuLink>
            </nav>
        </header>
    )
}