import React, { useState } from "react";
import './Main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import card1 from '../assets/playlist/1.jpeg';
import card2 from '../assets/playlist/2.png';
import card3 from '../assets/playlist/3.jpeg';
import card4 from '../assets/playlist/4.jpeg';
import card5 from '../assets/playlist/5.jpeg';
import card6 from '../assets/playlist/6.jpeg';
import card7 from '../assets/playlist/7.jpeg';
import card8 from '../assets/playlist/8.jpeg';
import card9 from '../assets/playlist/9.jpeg';
import card10 from '../assets/playlist/10.jpeg';
import card11 from '../assets/playlist/11.jpeg';
import card12 from '../assets/playlist/12.jpeg';
import card13 from '../assets/playlist/13.jpeg';
import card14 from '../assets/playlist/14.jpeg';
import card15 from '../assets/playlist/15.jpeg';

const playlists = [
    { id: 1, name: "Boas festas", image: card1 },
    { id: 2, name: "Feitos para você", image: card2 },
    { id: 3, name: "Lançamentos", image: card3 },
    { id: 4, name: "Creators", image: card4 },
    { id: 5, name: "Para treinar", image: card5 },
    { id: 6, name: "Podcasts", image: card6 },
    { id: 7, name: "Sertanejo", image: card7 },
    { id: 8, name: "Samba e pagode", image: card8 },
    { id: 9, name: "Funk", image: card9 },
    { id: 10, name: "MPB", image: card10 },
    { id: 11, name: "Rock", image: card11 },
    { id: 12, name: "Hip Hop", image: card12 },
    { id: 13, name: "Indie", image: card13 },
    { id: 14, name: "Relax", image: card14 },
    { id: 15, name: "Música Latina", image: card15 }
];

const Principal = ({ searchTerm }) => {
    const filteredPlaylists = playlists.filter(playlist =>
        playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="main-container">
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                {filteredPlaylists.length > 0 ? (
                                    filteredPlaylists.map((playlist) => (
                                        <a key={playlist.id} href="#" className="cards">
                                            <div className={`cards card${playlist.id}`}>
                                                <img src={playlist.image} alt={playlist.name} />
                                                <span>{playlist.name}</span>
                                            </div>
                                        </a>
                                    ))
                                ) : (
                                    <div class="no-results">
                                        <div class="no-results__content-title">
                                            <h1 class="no-results__title">Oops!</h1>
                                            <div class="circle">
                                                <span class="fa-solid fa-x"></span>
                                            </div>
                                        </div>
                                        <p class="no-results__subtitle">Não achamos nenhuma playlist com esse nome.</p>
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Principal;