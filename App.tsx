import * as React from 'react';
import {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  useReducer,
} from 'react';
import './style.css';

import { configureStore } from '@reduxjs/toolkit';

import Home from './Home';

import { Routes, Route, Link } from 'react-router-dom';

export const BirdContext = createContext({
  newBird: { bird: 'parrot' },
  setBird: () => null,
});

export const BirdProvider = ({ children }) => {
  const [newBird, setBird] = useState({ bird: 'parrot' });
  const value = { newBird, setBird };
  return <BirdContext.Provider value={value}>{children}</BirdContext.Provider>;
};

const initialState = {
  count: 0,
};
const teleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const firstState = {
  name: [],
};
const toDo = (state = firstState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'push':
      return {
        ...state,
        name: [...state.name, payload],
      };
    case 'pop':
      return {
        ...state,
        name: [state.name.pop()],
      };
    default:
      return state;
  }
};

export const store = configureStore({ reducer: toDo });

export default function App() {
  const [animal, setAnimal] = useState(0);

  const myBtn = useRef(0);
  const [state, dispatch] = useReducer(teleReducer, initialState);

  useEffect(() => {
    myBtn.current += 1;
    setTimeout(() => {
      console.log('created');
      document.getElementById('textValue').innerHTML = 'LION';
    }, 1000);
  });

  //Redux hook

  store.dispatch({ type: 'push', payload: '4' });
  store.dispatch({ type: 'push', payload: '5' });
  store.dispatch({ type: 'push', payload: '8' });
  store.dispatch({ type: 'pop' });
  const BirdProvider = useContext(BirdContext);
  console.log(BirdProvider.newBird);

  console.log('96: ' + store.getState().name.length);
  const getCall = () => {
    dispatch({ type: 'INCREMENT' });
    console.log(`63: ` + state.count);
  };

  return (
    <div>
      <Link to="/home">Home</Link>
      <br />
      {/* <Link to="/">App</Link> */}
      <hr />
      <h1>Hello !</h1>
      <h1>React Hooks</h1>
      <button onClick={() => setAnimal(animal + 1)}>Add Animal Lion</button>
      {animal == 0 ? null : <h1>{animal}</h1>}
      <h3 id="textValue"></h3>
      <h2>{myBtn.current}</h2>
      <button onClick={getCall}>Invoke Reducer Hook</button>

      <Routes>
        {/* <Route exact path="/" element={<App />} /> */}
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
