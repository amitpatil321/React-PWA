import React from "react";
import { Container, Image, Alert } from "react-bootstrap";
import { Offline } from "react-detect-offline";

export default function About() {
  return (
    <Container>
      <Offline>
        <Alert variant={"danger"}>You are in offline mode!</Alert>
      </Offline>
      <Image
        fluid
        alt="PWA community logo"
        src="https://mdn.mozillademos.org/files/16742/pwa.png"
      />
      <strong>Progressive Web Apps</strong> are web apps that use emerging web
      browser APIs and features along with traditional progressive enhancement
      strategy to bring a native app-like user experience to cross-platform web
      applications. Progressive Web Apps are a useful design pattern, though
      they aren't a formalized standard. PWA can be thought of as similar to
      AJAX or other similar patterns that encompass a set of application
      attributes, including use of specific web technologies and techniques.
      This set of docs tells you all you need to know about them.
      <br />
      <div class="page-block">
        <h4 class="block-heading">MOBILE-FIRST ERA IS HERE</h4>
        <p class="section-text">
          The amount of traffic from mobile devices has been increasing
          year-by-year. It is safe to say that we got past the tipping point
          already a couple years ago with 2018 desktop-mobile traffic
          distribution showing that 52% of overall web traffic came from mobile
          devices during that period.
        </p>
        <p class="section-text">
          The trend continues to demonstrate steady growth in both usage volume,
          as well as rate of technological progress, changing the way people
          interact with the web. Among the best examples is{" "}
          <a
            href="https://buildfire.com/mobile-ecommerce-stattistics-data/"
            class="section-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            mobile eCommerce, which has been booming over the past few years
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
