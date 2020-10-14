import React, {useState} from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import './App.css';
import {List} from "./List";

function App() {
  const [toggle, sstToggle] = useState(true)
  const [toggle2, sstToggle2] = useState(true)

  const [items, setItems] = useState([
    {id: 1, title: 'Title 1'},
    {id: 2, title: 'Title 2'},
    {id: 3, title: 'Title 3'},
  ])

  const removeItem = id => setItems(items.filter(i => i.id !== id))
  const addItem = () => {
    const title = prompt('Enter item title')
    const id = Date.now()

    setItems(items.concat([{id: id, title: title}]))
  }

  return (
    <div className="container">
      <button onClick={() => sstToggle(!toggle)}>Toggle</button>
      <button onClick={() => sstToggle2(!toggle2)}>Toggle 2</button>
      <button onClick={addItem}>Add item</button>
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
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state => <div className={`square blue ${state}`}>{state}</div>}

        </Transition>

        <CSSTransition
          in={toggle2}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          classNames="os"
        >
          <div className="square orange">
            {toggle2.toString()}
          </div>
        </CSSTransition>
      </div>
      <div className="blocks">
        <List items={items} onRemove={removeItem}/>
      </div>
    </div>
  );
}

export default App;
