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
      <Container className=" py-4 mb-4">
        <Row>
          {giphyList.map((item) => (
            <Col md="3">
              <Card key={item.id} className="my-2">
                <CardBody>
                  <CardImg
                    top
                    src={item.images.downsized.url}
                    height={200}
                    width={200}
                  />
                </CardBody>
                <CardFooter className="text-center share-icons ">
                  <WhatsappShareButton
                    url={item.images.downsized.url}
                    className="text-center "
                  >
                    <WhatsappIcon round={true} />
                  </WhatsappShareButton>
                  <TelegramShareButton
                    url={item.images.downsized.url}
                    className="text-center"
                  >
                    <TelegramIcon round={true} className="text-center" />
                  </TelegramShareButton>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DisplayGiphy;
