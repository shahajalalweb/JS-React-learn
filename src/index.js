import React from 'react';
import ReactDOM from 'react-dom';

const roots = document.querySelector('#root');

const Increment = () => {
    const [counters, setCounter] = React.useState(0);
    return (
      <div class="counter">
        <h1 id="display">{ counters }</h1>
        <button id="button" onClick={() => setCounter(counters + 1)}>Click ME</button>
      </div>
    );
}

ReactDOM.render(<Increment />, roots);
