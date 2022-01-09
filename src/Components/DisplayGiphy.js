import React from "react";
import {
  Container,
  Row,
  Col,
  List,
  CardBody,
  Card,
  CardHeader,
  CardFooter,
  CardImg,
} from "reactstrap";

const DisplayGiphy = ({ giphyList }) => {
  console.log("GIPHY : ", giphyList);
  return (
    <>
      <Row>
        {giphyList.map((item) => (
          <Col md="3">
            <Card key={item.id}>
              <CardBody>
                <CardImg
                  top
                  src={item.images.downsized.url}
                  height={200}
                  width={200}
                />
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DisplayGiphy;
