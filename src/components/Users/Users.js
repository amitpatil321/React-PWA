import React, { useState, useEffect } from "react";
import { Container, Table, Image, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Offline } from "react-detect-offline";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response.json().then((result) => {
          setUsers(result);
          // Store data in local storage for later use
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((err) => {
        // Fetch data from local storage when there is error or user is offline
        let localData = localStorage.getItem("users");
        setUsers(JSON.parse(localData));
      });
  }, ["users"]);

  return (
    <Container>
      <Offline>
        <Alert variant={"danger"}>You are in offline mode!</Alert>
      </Offline>
      <Table striped bordered hover responsive style={{ background: "#fff" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Image
                  src={
                    "https://randomuser.me/api/portraits/men/" +
                    user.id +
                    ".jpg"
                  }
                  style={{ width: "50px" }}
                  roundedCircle
                />
              </td>
              <td>
                <Link to={{ pathname: `/details/${user.id}`, state: { user } }}>
                  {user.name}
                </Link>
              </td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;
