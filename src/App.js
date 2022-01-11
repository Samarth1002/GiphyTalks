import { useState } from "react";
import Header from "./Components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button } from "reactstrap";
import DisplayGiphy from "./Components/DisplayGiphy";
import TrendingGiphy from "./Components/TrendingGiphy";
import Title from "./Components/Title";

function App() {
  const [giphyList, setGiphyList] = useState([]);
  const [isTrendingOn, setIstrendingOn] = useState(true);

  const addGiphyList = (item) => {
    setIstrendingOn(false);
    if (isTrendingOn) {
      setGiphyList([]);
    }
    setGiphyList(item);
  };

  return (
    <Container>
      <Title />
      <Header addGiphyList={addGiphyList} />
      {!isTrendingOn && <DisplayGiphy giphyList={giphyList} />}
      {isTrendingOn && <TrendingGiphy />}
    </Container>
  );
}

export default App;
