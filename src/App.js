import React from 'react';
import './index.scss';

function App() {
  const [caunt, setCount] = React.useState(0);
  const onClickPlus = () => {
    setCount(caunt + 1);
  };

  const onClickMinus = () => {
    setCount(caunt - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Сounter:</h2>
        <h1>{caunt}</h1>
        <button onClick={onClickMinus} className="minus">
          - Minus
        </button>
        <button onClick={onClickPlus} className="plus">
          Plus +
        </button>
      </div>
    </div>
  );
}

export default App;
