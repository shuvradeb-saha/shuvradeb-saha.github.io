import React from "react";
import Parser from "html-react-parser";

const PROJECTS = Object.freeze([
  {
    name: "Question Bank",
    github: "https://github.com/shuvradeb-saha/question-bank",
    description: `A restful web application for question management and automatic
    question paper generation, with a recommendation system that suggests
    similar document to the user. Followed the SDLC paradigm with
    client-server architecture for completing the whole project. The
    similar document recommendation was implemented using
    <i> cosine-similarity</i> with tf-idf transformation and used
    randomized algorithm while implementing the automatic question paper
    generation.`,
    tags: [
      "Spring Boot",
      "ReactJS",
      "Jwt",
      "Cosine Similarity",
      "Randmized Algorithm",
      "NLP",
      "iText",
    ],
  },
  {
    name: "Inventory Management System",
    github: "https://github.com/shuvradeb-saha/uims_web",
    description: `A web tool that allows any university department to keep track of their inventory and perform product requi-
    sition operations. The application was built using the MVC pattern, used basic authentication for user access
    management. A Software Requirement Analysis was carried out, as well as extensive documentation of rela-
    tional database modeling, class-based modeling, and flow-oriented modeling was performed to complete the
    project.`,
    tags: [
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Basic Authentication",
    ],
  },
  {
    name: "Bengali Text Editor",
    github: "https://github.com/shuvradeb-saha/TextEditor",
    description: `A Java-based lightweight Bengali text editor that supports the Bengali font. It has some basic features such as
    save, open, find, and replace, as well as syntax highlighting for a Bengali programming language called Potaka.
    For text search inside the editor, I used the KMP string matching algorithm and a regular expression to high-
    light the syntax.`,
    tags: ["Java", "Java Swing", "KMP", "Regex"],
  },
  {
    name: "Gomoku",
    github: "https://github.com/shuvradeb-saha/gomoku_five",
    description: `Five in a row, often known as Gomoku, is a game project. There are two modes: one for two players and one for AI. 
    There are three different themes in the game. JavaFx was used to create the user interface. The artificial intelligence component 
    was created with the help of the minimax algorithm and alpha-beta pruning.`,
    tags: ["Java", "JavaFx", "Thread", "AI", "Minimax"],
  },
]);

export default function Projects() {
  const renderProject = ({ name, github, description, tags }) => (
    <div className="section">
      <h3>{name}</h3>
      <div>{Parser(description)}</div>
      <div className="git_link">
        <span>Github:</span>
        <a href={github}>{github}</a>
      </div>

      <div className="tags">
        <span className="tag_head">Technologies:</span>
        {tags.map((tag) => (
          <span className="tag_item">{tag}</span>
        ))}
      </div>
    </div>
  );

  return <div className="content">{PROJECTS.map(renderProject)}</div>;
}
