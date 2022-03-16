import ClickCounter from "./component/ClickCounter";
import Counter from "./component/Counter";
import HoverCounter from "./component/HoverCounter";

function App() {
  return <div className="App">

      <Counter render= {(counter, incrementCount) => (<ClickCounter count={counter} incrementCount={incrementCount} />)}
      />

      <Counter render= {(counter, incrementCount) => (<HoverCounter count={counter} incrementCount={incrementCount} />)}
      />
      
    </div>
}

export default App;

