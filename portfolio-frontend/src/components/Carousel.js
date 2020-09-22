import React from "react";

import Card from "../components/Card";
import todo from "../assests/images/todo.png";
import newsletter from "../assests/images/newsletter.png";
import { Container, Row } from "react-bootstrap";
// import tindog from "../assests/images/tindog.png";
// import blogApp from "../assests/images/blogApp.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "TinDog App",
          subTitle: "Frontend Design",
          imgSrc:
            "https://www.dogsismylife.com/wp-content/uploads/cache/tindog-app-1w72q73kw29gegrvtiq4o1tjvdpz8gkylukv6lgepudg.jpg",
          link: "",
          selected: false,
        },
        {
          id: 1,
          title: "Keeper App",
          subTitle: "React Frontend Design",
          imgSrc: todo,
          link: "https://powerful-stream-53113.herokuapp.com/",
          selected: false,
        },
        {
          id: 2,
          title: "Blog App",
          subTitle: "Fullstack",
          imgSrc:
            "https://themeforest.img.customer.envatousercontent.com/files/280014070/01_preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=5eccb3ec968f2cd30ca673ab8a425de6",
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
