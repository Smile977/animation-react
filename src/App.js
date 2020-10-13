import React, {useState} from 'react';
import { Transition } from 'react-transition-group';
import './App.css';

function App() {
  const [toggle, sstToggle] = useState(true)

  return (
    <div className="container">
      <button onClick={() => sstToggle(!toggle)}>Toggle</button>
      <hr/>
      <div className={'blocks'}>
        <Transition
          in={toggle} // флаг которые отвечает за переключение элемента
          timeout={{
            enter: 1000, // отвечает за появление элемента через 1000 мс
            exit: 500  // отвечает за исчезновение элемента через 500 мс
          }} // поличество милисекунд, сколько эта анимация длится
          mountOnEnter
          unmountOnExit
        >
          {state => <div className={`square blue ${state}`}>{state}</div>}

        </Transition>
      </div>
    </div>
  );
}

export default App;
