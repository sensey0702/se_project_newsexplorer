import "./About.css";

import author from "../../assets/author.png";

function About() {
  return (
    <section className="about">
      <img src={author} alt="photo of author" className="about__image" />
      <div className="about__wrapper">
        {" "}
        <h1 className="about__title">About the author</h1>
        <p className="about__paragraph">
          Hello! My name is Samantha Ensey and I am a Software Engineering
          student with TripleTen. I am currently a chaos manager at home for my
          three year old and one year old. Welcome to my NewsExplorer app!
        </p>
      </div>
    </section>
  );
}

export default About;
