import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        Hello and welcome to my platform,
        <div className="m-space" />
        My name is Israa Kadhim, I am a full stack web developer who started
        coding as a hobby while being studnet in the field of Dentistry. Little
        did I know, the COVID-19 pandemic was going to occur during my last
        semseter of studies, I was not able to graduate Summer 2020 due to the
        clinical nature of my program. I took quarantine as an opportunity and
        started to code full-time from home, until I recieve my full stack
        certificate (I have various knowledge and experience with JavaScript,
        React.JS, jQuery, Bootstrap, Node.js, Express.js, JSON, EJS, APIs, and
        more). I then returned to school to finish my clinical requirments and
        graduate, then proceeded with my programming journey, while teaching
        myself how to sew garments.
        <div className="s-space" />
        Over a year later, here I am, working on my independent clothing line,
        building websites for small buisnesses on the side, and haunting for an
        internship position to apply my passion of programming and working with
        others.
        <div className="s-space" />I consider myself to be a self-starter and a
        fighter, for what I'm passionate about. I'm willing to go where the
        opportunity takes me, and I'm not afraid to conquer a new skill.
      </Content>
    </div>
  );
}

export default AboutPage;
