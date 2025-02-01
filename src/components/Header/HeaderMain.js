import React from 'react';
import './HeaderStyles.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import searchIcon from '../../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="navigation-header">
                <div className="navigation">
                    <button >
                        <img src={smallLeft} alt='left-arrow'/>
                    </button> 
                    <button >
                        <img src={smallRight} alt='right-arrow'/>
                    </button>
                </div>
                <div className="search-header">
                    <img src={searchIcon} alt=""></img>
                    <input id="search-input" type="text" maxLength="800" 
                    placeholder="O que você quer ouvir?" />
                </div>
                <div className="login-header">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
    )
}
export default Header;
