import React from 'react';
import "../css/Header.css";
import Logo from "../assets/airo-logo.png";
import SearchBar from './SearchBar';

export const Header = ({keyword, onChange, fetchData}) => {
    return (
        <header className="header">
            <img src={Logo} className="logo" alt="logo"/>
            <SearchBar {...{ keyword, onChange, fetchData }} />
        </header>
    )
}

export default Header;
