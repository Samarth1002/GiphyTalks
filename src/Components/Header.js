import React, { useState } from "react";
import axios from "axios";
import { InputGroup, Form, Input, Button } from "reactstrap";

const Header = ({ addGiphyList }) => {
  const KEY = "jpR4UfL3JfXERJqyYJXGV5xyGx0a1WWH";
  const [searchQuery, setSearchQuery] = useState([]);

  const fetchGiphy = async () => {
    try {
      const { data } = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: KEY,
          q: searchQuery,
          limit: 20,
        },
      });

      addGiphyList(data.data);
    } catch (error) {
      console.log(searchQuery);
      console.log("API ERROR :", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGiphy();
  };

  return (
    <div className="my-5">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            className="text-center p-3 mx-2 fs-4 input-font"
            placeholder="type here..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <Button
            color="warning"
            block
            type="submit"
            className="mt-4 p-3 fs-5 search-btn"
          >
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Header;
