import { useState } from "react";
import Header from "./Components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import DisplayGiphy from "./Components/DisplayGiphy";

function App() {
  const [giphyList, setGiphyList] = useState([]);

  const addGiphyList = (item) => {
    console.log("item", item);
    setGiphyList(item);
  };

  return (
    <div className="App">
      <Container>
        <Header addGiphyList={addGiphyList} />
        <DisplayGiphy giphyList={giphyList} />
      </Container>
    </div>
  );
}

export default App;
