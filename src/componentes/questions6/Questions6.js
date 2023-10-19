function Questions6(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 5) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">6/10</p>
                    <p>Quem foi o campeao da Champions League de 2005?</p>
                    <button className="questions" onClick={incrementValues}>Liverpool</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Barcelona</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Milan</button>
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
                    <p className="range">6/10</p>
                    <p>Quem foi o campeao da Champions League de 2005?</p>
                    <button className="certo">Liverpool</button>
                    <button className="errado">Barcelona</button>
                    <button className="errado">Milan</button>
                    <button className="errado">Porto</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions6;