import React from "react";
import { Link } from "react-router-dom"; //импортирую Link для навигации в приложениях React с использованием react-router-dom
import "../styles/App.css"; //подключаю CSS файл для стилизации
import icon from "../components/Icon.png";

const Stages = () => {
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
        <section id="section2">
          <div className="title-icon">
            <h2>Этапы работы</h2>
            <img src={icon} alt="Иконка" className="icon" />
          </div>
          <div className="left-text">
            {[
              "Знакомство",
              "Коммерческое предложение",
              "Договор",
              "Сотрудничество",
            ].map((stage, index) => (
              <div className="stage" key={index}>
                <div
                  className="stage-header"
                  onClick={() => toggleDescription(`desc${index + 1}`)}
                >
                  <h3>{stage}</h3>
                  <span className="plus">+</span>
                </div>
                <p
                  className="stage-description"
                  id={`desc${index + 1}`}
                  style={{ display: "none" }}
                >
                  {getStageDescription(index)}
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

const getStageDescription = (index) => {
  const descriptions = [
    "Созваниваемся, чтобы обсудить ваши бизнес-цели и потребности для разработки идеального решения, а также объем работ.",
    "После обсуждения я подготавливаю детализированное коммерческое предложение и сроки выполнения.",
    "Если предложение вам подходит, подписываем договор и вносите предоплату для старта работ.",
    "Проводим детальный анализ текущих бизнес-процессов и разрабатываем оптимальное решение для вашей компании.",
  ];
  return descriptions[index];
};

export default Stages;
