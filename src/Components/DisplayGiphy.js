import React from "react";
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardFooter,
  CardImg,
} from "reactstrap";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const DisplayGiphy = ({ giphyList }) => {
  console.log("GIPHY : ", giphyList);
  return (
    <>
      <Row>
        {giphyList.map((item) => (
          <Col md="3" sm="6" lg="3" key={item.id} className="card-col">
            <Card className="my-3 giphy-card">
              <CardBody>
                <CardImg
                  top
                  src={item.images.downsized.url}
                  height={150}
                  width={150}
                />
              </CardBody>
              <CardFooter className="text-center share-icons ">
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
    </>
  );
};

export default DisplayGiphy;
