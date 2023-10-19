function Questions3(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 2) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">3/10</p>
                    <p>Quem ganhou o Brasileirao de 2020? </p>
                    <button className="questions" onClick={incrementValues}>Flamengo</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Inter</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Sao Paulo</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Palmeiras</button>
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
                    <p className="range">3/10</p>
                    <p>Quem ganhou o Brasileirao de 2020? </p>
                    <button className="certo">Flamengo</button>
                    <button className="errado">Inter</button>
                    <button className="errado">Sao Paulo</button>
                    <button className="errado">Palmeiras</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions3;