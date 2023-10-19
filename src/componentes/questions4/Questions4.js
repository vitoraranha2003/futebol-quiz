function Questions4(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 3) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">4/10</p>
                    <p>Qual desses times nunca ganhou uma Supercopa do Brasil?</p>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Corinthians</button>
                    <button className="questions" onClick={incrementValues}>Athletico Paranaense</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Gremio</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Atletico Mineiro</button>
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
                    <p className="range">4/10</p>
                    <p>Qual desses times nunca ganhou uma Supercopa do Brasil?</p>
                    <button className="errado">Corinthians</button>
                    <button className="certo">Athletico Paranaense</button>
                    <button className="errado">Gremio</button>
                    <button className="errado">Atletico Mineiro</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions4;