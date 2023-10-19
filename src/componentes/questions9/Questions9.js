function Questions9(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 8) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">9/10</p>
                    <p>Qual desses jogadores foi eleito o principe do futebol pelo Rei Pele?</p>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Maradona</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Ronaldo Fenomeno</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Garrincha</button>
                    <button className="questions" onClick={incrementValues}>Zico</button>
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
                    <p className="range">9/10</p>
                    <p>Qual desses jogadores foi eleito o principe do futebol pelo Rei Pele?</p>
                    <button className="errado">Maradona</button>
                    <button className="errado">Ronaldo Fenomeno</button>
                    <button className="errado">Garrincha</button>
                    <button className="certo">Zico</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions9;