import { useState } from "react";
import Header from "./Components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import DisplayGiphy from "./Components/DisplayGiphy";
import TrendingGiphy from "./Components/TrendingGiphy";

function App() {
  const [giphyList, setGiphyList] = useState([]);
  const [isTrendingOn, setIstrendingOn] = useState(false);

  const addGiphyList = (item) => {
    setIstrendingOn(true);
    console.log("item", item);
    setGiphyList(item);
  };

  return (
    <div className="App">
      <Container>
        <Header addGiphyList={addGiphyList} />
        {isTrendingOn && <DisplayGiphy giphyList={giphyList} />}
        {!isTrendingOn && <TrendingGiphy />}
      </Container>
    </div>
  );
}

export default App;
