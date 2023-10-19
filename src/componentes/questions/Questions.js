import { useState } from 'react';
import './Questions.css';

function Questions(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 0) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">1/10</p>
                    <p>Qual dos times abaixo possui mais titulos de Champions League?</p>
                    <button className="questions" onClick={incrementValues}>Manchester United</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Benfica</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Juventus</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Porto</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
            </div>
        )
    }
    else {
        const increaseStage = props.increaseStage;
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">1/10</p>
                    <p>Qual dos times abaixo possui mais titulos de Champions League?</p>
                    <button className="certo">Manchester United</button>
                    <button className="errado">Benfica</button>
                    <button className="errado">Juventus</button>
                    <button className="errado">Porto</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions;