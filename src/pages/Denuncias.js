import React from 'react';
import './Denuncias.css'


function Denuncias() {
    return (
        <div className="main_denuncias">
            <div className="card_desc">
                <div><h2>Faça sua denuncia</h2></div>
            </div>
            <div className="card_denuncias">
                <h3 input="text">Usuário</h3>
                <textarea className="card_denuncias_denuncia" placeholder="Faça sua denuncia aqui">
                    
                </textarea>
            </div>

        </div>
    )
}
export default Denuncias;