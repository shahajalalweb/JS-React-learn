import Bracket from "./component/composition/Bracket";
import Emoji from "./component/composition/Emoji";
import Text from "./component/composition/Text";

function App() {
  return (
    <Emoji>
      {({addEmoji}) => 
      <Bracket>
      {({addBarcket}) => <Text addEmoji={addEmoji} addBarcket={addBarcket}/>}
      </Bracket>}
    </Emoji>
  );
}

export default App;

