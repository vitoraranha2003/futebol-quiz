import './Gameover.css';

function Gameover(props) {
    const reiniciar = props.reiniciar
    if (props.count === 10) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="gameover">Fim de jogo</p>
                    <p>Obrigado por jogar</p>
                    <p className="pontosf">Seus pontos: {props.pont} de {props.count}</p>
                </div>
                <button className="nextfinal" onClick={reiniciar}>Reiniciar</button>
            </div>
        )
    }
}

export default Gameover;