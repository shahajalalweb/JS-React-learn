import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Mithi, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="i love you" />
      <Welcome name="Do you Love me " />
      <Welcome name="take Love LojjaBoti" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);