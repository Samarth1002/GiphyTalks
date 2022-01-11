import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  CardBody,
  CardImg,
  Card,
  CardFooter,
} from "reactstrap";
import { WhatsappShareButton, TelegramShareButton } from "react-share";
import { WhatsappIcon, TelegramIcon } from "react-share";

export const TrendingGiphy = () => {
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

        // console.log(result);
        setTrendingGiphyList(data.data);
        console.log("List:", trendingGiphyList);
      };

      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Row>
      {trendingGiphyList.map((item) => (
        <Col md="4" sm="6" lg="3" key={item.id} className="card-col">
          <Card className="giphy-card my-3">
            <CardBody>
              <CardImg
                top
                src={item.images.downsized.url}
                height={150}
                width={150}
              />
            </CardBody>
            <CardFooter className="text-center share-icons">
              <WhatsappShareButton url={item.images.downsized.url}>
                <WhatsappIcon round={true} />
              </WhatsappShareButton>
              <TelegramShareButton url={item.images.downsized.url}>
                <TelegramIcon round={true} />
              </TelegramShareButton>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
