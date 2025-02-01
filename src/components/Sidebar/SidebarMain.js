import React from "react";
import './SidebarStyles.css';
import spotifyLogo from '../../assets/icons/logo-spotify.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
        
        <nav className="sidebar_navigation">
            <div className="logo">
                    <a href="teste">
                    <img src={spotifyLogo} alt="spotify logo"/>
                </a>
            </div>
                <ul>
                    <li>
                    <a href="teste">
                        <span className="fa fa-home"></span>
                        <span >Início</span>
                    </a>
                    </li>
                    <li>
                        <a href="teste">
                        <span className="fa fa-search"></span>
                        <span >Buscar</span>
                    </a>
                </li>
                </ul>
        </nav>
        
        <div className="library">
            <div className="library-content">
                <button className="library-button">
                    <span className="fa fas fa-book"></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>
            <section className="playlist-section">
                <div className="playlist-section_content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="sub title">É vamos te ajudar.</span>
                    <button className="playlist-section_button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
            <div class="cookies">
                <a href="teste">
                    Cookies
                </a>
            </div>
            <div className="language-selector">
                <button className="language-selector_button">
                    <span className="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
        
    </div>

        
    )
}

export default Sidebar;