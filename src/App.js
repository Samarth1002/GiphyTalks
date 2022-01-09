import { useState } from "react";
import Header from "./Components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";

function App() {
  const [giphyList, setGiphyList] = useState([]);

  const addGiphyList = (item) => {
    setGiphyList([...giphyList, item]);
  };

  console.log("GIPHYLIST : ", giphyList);

  return (
    <div className="App">
      <Container>
        <Header addGiphyList={addGiphyList} />
        
      </Container>
    </div>
  );
}

export default App;
