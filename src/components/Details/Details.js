import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Table,
  Alert,
} from "react-bootstrap";
import { Offline, Online } from "react-detect-offline";

import "./Details.css";

const Details = (props) => {
  const user = props.location.state.user;
  const { id, name, username, email, address, phone, website, company } = user;
  return (
    <Container>
      <Offline>
        <Alert variant={"danger"}>You are in offline mode!</Alert>
      </Offline>

      <Row>
        <Col md={4}>
          <Row>
            <Col md={12} className="bg-white profile-pic">
              <Image
                src={"https://randomuser.me/api/portraits/men/" + id + ".jpg"}
                roundedCircle
              />
              <h3>{name}</h3>
              <p>
                <a href={website} target="_blank">
                  {website}
                </a>
              </p>
              <p>
                {address.street}, {address.suite}, {address.city}
              </p>
              <p>
                <Button variant="primary">Follow</Button>{" "}
                <Button variant="outline-primary">Message</Button>
              </p>
            </Col>
          </Row>
        </Col>
        {/* <Col md={1}></Col> */}
        <Col md={7} className="bg-white" style={{ marginLeft: "10px" }}>
          <Table responsive>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Username</td>
                <td>{username}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  {address.street}, {address.suite}, {address.city}
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>{website}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>{company.name}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
