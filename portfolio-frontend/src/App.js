import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Israa Kadhim",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Hello there,",
        subTitle: "It's nice to have you.",
        text: "Checkout my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Connect",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0 main" fluid={true}>
          <Header />

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />

          <Route
            path="/about"
            exact
            render={() => <AboutPage title={this.state.about.title} />}
          />

          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
