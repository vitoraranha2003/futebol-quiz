import { useState } from 'react';
import Welcome from './componentes/welcome/Welcome';
import Questions from './componentes/questions/Questions';
import Questions2 from './componentes/questions2/Questions2';
import Questions3 from './componentes/questions3/Questions3';
import Questions4 from './componentes/questions4/Questions4';
import Questions5 from './componentes/questions5/Questions5';
import Questions6 from './componentes/questions6/Questions6';
import Questions7 from './componentes/questions7/Questions7';
import Questions8 from './componentes/questions8/Questions8';
import Questions9 from './componentes/questions9/Questions9';
import Questions10 from './componentes/questions10/Questions10';
import Gameover from './componentes/gameover/Gameover';


function App() {

  document.title = 'Quiz de Futebol';

  const [stage, setStage] = useState(0);
  const [count, setCount] = useState(0);
  const [pont, setPont] = useState(0);

  const increaseStage = () => {
    setStage(stage + 1);
  };

  const reiniciar = () => {
    setStage(0)
    setCount(0)
    setPont(0)
  };

  if (stage === 0) {
    return <Welcome increaseStage={increaseStage} />
  }
  else if (stage === 1) {
    return <Questions increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont}
    />
  }
  else if (stage === 2) {
    return <Questions2 increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
  else if (stage === 3) {
    return <Questions3 increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
  else if (stage === 4) {
    return <Questions4 increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
  else if (stage === 5) {
    return <Questions5 increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
  else if (stage === 6) {
    return <Questions6 increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
  else if (stage === 7) {
    return <Questions7 increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
  else if (stage === 8) {
    return <Questions8 increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
  else if (stage === 9) {
    return <Questions9 increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
  else if (stage === 10) {
    return <Questions10 increaseStage={increaseStage}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
  else if (stage === 11) {
    return <Gameover reiniciar={reiniciar}
      count={count}
      pont={pont}
      setCount={setCount}
      setPont={setPont} />
  }
}
export default App;