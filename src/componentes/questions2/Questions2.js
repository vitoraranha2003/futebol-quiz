function Questions2(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 1) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">2/10</p>
                    <p>Qual jogador fez o gol do titulo na final da Copa do Mundo de 2010?</p>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Robben</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Xavi</button>
                    <button className="questions" onClick={incrementValues}>Iniesta</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Gotze</button>
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
                    <p className="range">2/10</p>
                    <p>Qual jogador fez o gol do titulo na final da Copa do Mundo de 2010?</p>
                    <button className="errado">Robben</button>
                    <button className="errado">Xavi</button>
                    <button className="certo">Iniesta</button>
                    <button className="errado">Gotze</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions2;