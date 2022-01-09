import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  CardBody,
  CardHeader,
  CardImg,
  Card,
  CardFooter,
} from "reactstrap";

const TrendingGiphy = ({ checkVisibiltiy }) => {
  const KEY = `jpR4UfL3JfXERJqyYJXGV5xyGx0a1WWH`;

  const [trendingGiphyList, setTrendingGiphyList] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          "https://api.giphy.com/v1/gifs/trending",
          {
            params: {
              api_key: KEY,
              limit: 20,
            },
          }
        );
        // console.log(data);
        setTrendingGiphyList(data.data);
        console.log("List:", trendingGiphyList);
      };

      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <>
      <Container className="my-5">
        <Row>
          {trendingGiphyList.map((item) => (
            <Col md="3" key={item.id}>
              <Card>
                <CardBody>
                  <CardImg
                    top
                    src={item.images.downsized.url}
                    height={150}
                    width={150}
                  />
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TrendingGiphy;
