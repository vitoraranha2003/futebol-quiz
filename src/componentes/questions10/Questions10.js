function Questions10(props) {
    function incrementValues() {
        props.setCount(props.count + 1);
        props.setPont(props.pont + 1);
    }
    if (props.count === 9) {
        return (
            <div className="main">
                <div className="painel">
                    <img className="bola_esquerda" src="bola.png" alt="bola" />
                    <h1>Quiz de Futebol</h1>
                    <img className="bola_direita" src="bola.png" alt="bola" />
                </div>
                <div className="questions">
                    <p className="range">10/10</p>
                    <p>Quem ganhou a chuteira de ouro na temporada 13/14?</p>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Neymar</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Messi</button>
                    <button className="questions" onClick={incrementValues}>Luis Suarez</button>
                    <button className="questions" onClick={() => props.setCount(props.count + 1)}>Cristiano Ronaldo</button>
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
                    <p className="range">10/10</p>
                    <p>Quem ganhou a chuteira de ouro na temporada 13/14?</p>
                    <button className="errado">Neymar</button>
                    <button className="errado">Messi</button>
                    <button className="certo">Luis Suarez</button>
                    <button className="errado">Cristiano Ronaldo</button>
                </div>
                <p className="pontos">Pontos: {props.pont}</p>
                <button className="next" onClick={increaseStage}>Proximo</button>
            </div>
        )
    }
}

export default Questions10;