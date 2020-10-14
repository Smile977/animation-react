import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './App.css';

export const List = ({items, onRemove}) => (
  <TransitionGroup component={'ul'}>
    {items.map(item => {
      return (
        <CSSTransition
          classNames={'os'}
          timeout={1750}
          key={item.id}
        >
          <li
            key={item.id}
            onClick={() => onRemove(item.id)}
            className={'item'}
          >
            {item.title}
          </li>
        </CSSTransition>
      )
    })}
  </TransitionGroup>
)