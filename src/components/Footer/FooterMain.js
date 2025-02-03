import React from "react";
import './FooterStyles.css'

const Footer = () =>{
    return (
        <footer className="disclaimer-premium">
        <div className="text">
            <p className="disclaimer-premium_title">Testar o Premium de graça</p>
            <p className="disclaimer-premium_subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns
                anúncios. Não precisa de cartão de crédito.</p>
        </div>
        <div className="disclaimer-button">
            <button type="button">Inscreva-se grátis</button>
        </div>
    </footer>
    )
}
export default Footer;