function Questions8(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 7) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">8/10</p>
                    <p>Em 2006, quem fez o gol da classificacao que levou Portugal pra semifinal da Copa do Mundo?</p>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Rui Costa</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Deco</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Luis Figo</button>
                    <button className="questions" onClick={incrementValues}>Cristiano Ronaldo</button>
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
                    <p className="range">8/10</p>
                    <p>Em 2006, quem fez o gol da classificacao que levou Portugal pra semifinal da Copa do Mundo?</p>
                    <button className="errado">Rui Costa</button>
                    <button className="errado">Deco</button>
                    <button className="errado">Luis Figo</button>
                    <button className="certo">Cristiano Ronaldo</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions8;