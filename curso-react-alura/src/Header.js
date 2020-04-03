import React from 'react'

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <a href="/" className="brand-logo">Casa do Código</a>
                <ul  className="right">
                    <li><a href="/autores">Livro</a></li>
                    <li><a href="/livros">Autores</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;