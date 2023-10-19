function Questions5(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 4) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">5/10</p>
                    <p>Quem ganhou a Bola de Ouro de 1994?</p>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Baggio</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Zidane</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Ronaldo Fenomeno</button>
                    <button className="questions" onClick={incrementValues}>Romario</button>
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
                    <p className="range">5/10</p>
                    <p>Quem ganhou a Bola de Ouro de 1994?</p>
                    <button className="errado">Baggio</button>
                    <button className="errado">Zidane</button>
                    <button className="errado">Ronaldo Fenomeno</button>
                    <button className="certo">Romario</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions5;