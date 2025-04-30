import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import ModalReady from "../components/ModalReady";
import { ProjectProvider } from "../context/ProjectContext";

const Cooperation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ProjectProvider>
      <div className="content-area">
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/stages">Этапы работы</Link></li>
            <li><Link to="/projects">Проекты</Link></li>
            <li><Link to="/cooperation">Сотрудничество</Link></li>
          </ul>
        </nav>

        <main>
          <section id="section4">
            <h2>Я открыта для новых проектов.</h2>
            <h2>Давайте преобразим ваш бизнес</h2>
            <h2>вместе с 1С!</h2>

            <div className="cooperation-buttons">
              {["Telegram", "GitHub", "WhatsApp"].map((platform, index) => {
                let link;
                switch (platform) {
                  case "Telegram":
                    link = "tg://resolve?domain=nastyakrasun";
                    break;
                  case "GitHub":
                    link = "https://github.com/nastyakrasun";
                    break;
                  case "WhatsApp":
                    link = "https://wa.me/89176101029";
                    break;
                  default:
                    link = "#";
                }
                return (
                  <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                    <button className="cooperation-button">{platform}</button>
                  </a>
                );
              })}
            </div>

            <div className="order-button-container">
              <button className="order-button" onClick={() => setIsModalOpen(true)}>
                Выбрать проект
              </button>
            </div>

            <ModalReady isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          </section>

          {/*
          <footer className="footer">
            <p>&copy; 2025 Анастасия Красун. Все права защищены.</p>
          </footer> 
          */}
        </main>
      </div>
    </ProjectProvider>
  );
};

export default Cooperation;
