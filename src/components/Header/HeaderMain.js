import React from 'react';
import './HeaderStyles.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import searchIcon from '../../assets/icons/search.png';

const Header = ({onSearch}) => {
    return (
        <nav className="navigation-header">
                <div className="navigation">
                    <button className = 'arrow-left'>
                        <img className='fa-arrow-left'src={smallLeft} alt='left-arrow'/>
                    </button> 
                    <button className = 'arrow-right' >
                        <img className='fa-arrow-right'src={smallRight} alt='right-arrow'/>
                    </button>
                </div>
                <div className="search-header">
                    <img src={searchIcon} alt=""></img>
                    <input 
                    id="search-input" 
                    type="text" 
                    maxLength="800" 
                    placeholder="O que você quer ouvir?"
                    onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
                <div className="login-header">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
    )
}
export default Header;
