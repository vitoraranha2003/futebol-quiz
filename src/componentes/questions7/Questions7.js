function Questions7(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 6) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">7/10</p>
                    <p>Quem ganhou a Copa do Mundo de 1934?</p>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Alemanha</button>
                    <button className="questions" onClick={incrementValues}>Italia</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Uruguai</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Inglaterra</button>
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
                    <p className="range">7/10</p>
                    <p>Quem ganhou a Copa do Mundo de 1934?</p>
                    <button className="errado">Alemanha</button>
                    <button className="certo">Italia</button>
                    <button className="errado">Uruguai</button>
                    <button className="errado">Inglaterra</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions7;