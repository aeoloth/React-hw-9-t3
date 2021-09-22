import { useHistory } from "react-router";
import "./App.css";

function App() {
  const history = useHistory();
  const richDadTiltle = "Rich Dad Poor Dad"
  const theRichest = "The Richest Man In Babylon"

  const handleClick = (name) => {
    history.push(`/about/${name}`);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => handleClick(richDadTiltle)}>{richDadTiltle}</button>
      <button onClick={() => handleClick(theRichest)}>{theRichest}</button>
    </div>
  );
}

export default App;
