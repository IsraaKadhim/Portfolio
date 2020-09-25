import React from "react";
import { Container, Row } from "react-bootstrap";

import Card from "../components/Card";

import todo from "../assests/images/todo.png";
import newsletter from "../assests/images/newsletter.png";
import tindog from "../assests/images/tindog.png";
import blog from "../assests/images/blog.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Keeper App",
          subTitle: "React Frontend Design",
          imgSrc: todo,
          link: "https://powerful-stream-53113.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "TinDog App",
          subTitle: "Bootstrap Frontend Design",
          imgSrc: tindog,
          link: "https://github.com/IsraaKadhim/TinDog",
          selected: false,
        },
        {
          id: 2,
          title: "Blog App",
          subTitle: "Frontend Design + MongoDB Database",
          imgSrc: blog,
          link: "https://github.com/IsraaKadhim/blog",
          selected: false,
        },
        {
          id: 3,
          title: "Newsletter SignUp",
          subTitle: "Fullstack",
          imgSrc: newsletter,
          link: "https://aqueous-ravine-98922.herokuapp.com/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
