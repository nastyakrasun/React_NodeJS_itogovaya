import React, { useState } from "react";
import "../styles/App.css";
import project1 from "../components/project1.png";
import project2 from "../components/project2.png";
import Header from "../components/Header";

const Projects = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState([false, false]);

  const toggleDescription = (index) => {
    setVisibleDescriptions((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const projects = [
    {
      image: project1,
      title: "Разработка прикладного решения для автоматизации предприятия",
      description:
        "Конфигурация 1С с возможностью ведения оперативного учета, бухгалтерского учета, учета зарплаты и начислений.",
    },
    {
      image: project2,
      title: "Разработка решения для управления техническим предприятием",
      description:
        "Конфигурация, содержащая все элементы управленческих учетных систем на платформе 1С:Предприятие.",
    },
  ];

  return (
    <div className="content-area">
      <Header />
      <main>
        <section id="section3">
          <div className="title-counter">
            <h2>Проекты</h2>
            <button className="counter">{projects.length}</button>
          </div>
          <div className="left-text">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <img
                  src={project.image}
                  alt={`Проект ${index + 1}`}
                  className="project-image"
                />
                <div className="title-href">
                  <h3>{project.title}</h3>
                  <a
                    href="#"
                    className="info"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDescription(index);
                    }}
                  >
                    подробнее
                  </a>
                </div>
                <p
                  className="project-description"
                  style={{ display: visibleDescriptions[index] ? "block" : "none" }}
                >
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
