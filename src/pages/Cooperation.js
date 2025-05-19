import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "../styles/App.css";
import ModalReady from "../components/ModalReady";
import { ProjectProvider } from "../context/ProjectContext";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

const Cooperation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //массив для динамического отображения компонентов интерфейса
  const platforms = [
    {
      name: "Telegram",
      link: "tg://resolve?domain=nastyakrasun",
    },
    {
      name: "GitHub",
      link: "https://github.com/nastyakrasun",
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/89176101029",
    },
  ];

  return (
    <ProjectProvider>
      <div className="content-area">
        <Header />
        <main>
          <section id="section4">
            <h2>Я открыта для новых проектов.</h2>
            <h2>Давайте преобразим ваш бизнес</h2>
            <h2>вместе с 1С!</h2>

            <div className="cooperation-buttons">
              {platforms.map((platform, index) => (
                <CustomButton
                  key={index}
                  text={platform.name}
                  link={platform.link}
                  className={`cooperation-button ${platform.name.toLowerCase()}`}
                />
              ))}
            </div>

            <div className="order-button-container">
              <CustomButton
                text="Выбрать проект"
                onClick={() => setIsModalOpen(true)}
                className="order-button"
              />
            </div>

            <ModalReady
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </section>
        </main>
      </div>
    </ProjectProvider>
  );
};

export default Cooperation;
