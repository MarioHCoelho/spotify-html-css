/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './MainStyles.css'

const Main = () => {
    return (
        <div class="playlist-container">
                <div id="result-playlists">
                    <div class="playlist">
                        <h1 id="greetings">Boas vindas</h1>
                        <h2 class="session">Navegar por todas as seções</h2>
                    </div>
                    <div class="offer-scroll_container">
                        <div class="offer-list">
                            <section class="offer-list_item">
                                <a href="" class="cards">
                                    <div class="cards card1">
                                        <img src="./src/assets/playlist/1.jpeg" alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" class="hidden">
                    <div class="grid-container">
                        <div class="artist-card" id="">
                            <div class="card-img">
                                <img id="artist-img" class="artist-img" />
                                <div class="play">
                                    <span class="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div class="card-text">
                                <a title="Foo Fighters" class="vst" href="">
                                <span class="artist-name" id="artist-name"></span>
                                <span class="artist-categorie">Artista</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                

    )
}
export default Main;