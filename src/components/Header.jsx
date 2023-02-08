import React from 'react';
import "../css/Header.css";
import SearchBar from './SearchBar';

export const Header = ({keyword, onChange, fetchData}) => {
    return (
        <header className="header">
            <img src={require("../assets/airo-logo.png")} className="logo" alt="logo"/>
            <SearchBar {...{ keyword, onChange, fetchData }} />
        </header>
    )
}

export default Header;
