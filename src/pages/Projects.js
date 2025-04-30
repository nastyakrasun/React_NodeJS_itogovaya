import React from "react";
import { Link } from "react-router-dom"; //импортирую Link для навигации в приложениях React с использованием react-router-dom
import "../styles/App.css"; //подключаю CSS файл для стилизации
import project1 from "../components/project1.png";
import project2 from "../components/project2.png";

const Projects = () => {
  const toggleDescription = (id) => {
    const desc = document.getElementById(id);
    desc.style.display = desc.style.display === "none" ? "block" : "none";
  };

  return (
    <div className="content-area">

      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/stages">Этапы работы</Link>
          </li>
          <li>
            <Link to="/projects">Проекты</Link>
          </li>
          <li>
            <Link to="/cooperation">Сотрудничество</Link>
          </li>
        </ul>
      </nav>

      <main>
        <section id="section3">
          <div className="title-counter">
            <h2>Проекты</h2>
            <button className="counter">2</button>
          </div>
          <div className="left-text">
            {[
              {
                image: project1,
                title:
                  "Разработка прикладного решения для автоматизации предприятия",
                description:
                  "Конфигурация 1С с возможностью ведения оперативного учета, бухгалтерского учета, учета зарплаты и начислений.",
              },
              {
                image: project2,
                title:
                  "Разработка решения для управления техническим предприятием",
                description:
                  "Конфигурация, содержащая все элементы управленческих учетных систем на платформе 1С:Предприятие.",
              },
            ].map((project, index) => (
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
                    onClick={() => toggleDescription(`desc${index + 1}`)}
                  >
                    подробнее
                  </a>
                </div>
                <p
                  className="project-description"
                  id={`desc${index + 1}`}
                  style={{ display: "none" }}
                >
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <p>&copy; 2025 Анастасия Красун. Все права защищены.</p>
      </footer> */}

    </div>
  );
};

export default Projects;
