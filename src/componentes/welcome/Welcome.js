import React from 'react';
import './Welcome.css';

function Welcome(props) {

    const increaseStage = props.increaseStage;

    return (
        <div className="main">
            <div className="painel">
                <img className="bola_esquerda" src="bola.png" alt="bola" />
                <h1>Quiz de Futebol</h1>
                <img className="bola_direita" src="bola.png" alt="bola" />
            </div>
            <h2>Seja Bem-Vindo</h2>
            <img className="campo" src="campo.png" alt="campo" />
            <br></br><br></br><br></br><br></br>
            <button onClick={increaseStage}>Iniciar</button>
        </div>
    )
}

export default Welcome;