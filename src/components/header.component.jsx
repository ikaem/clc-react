import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <header className="main-header">
        <h1 className="main-header__logo">Cheat Like Chessmaster</h1>
        <nav className="main-header__navigation">
            <span className="main-header__navigation-option">My Games</span>
            <span className="main-header__navigation-option">New Game</span>
            <span className="main-header__navigation-option">Log Out</span>
        </nav>
    </header>
    );
}

export default Header;