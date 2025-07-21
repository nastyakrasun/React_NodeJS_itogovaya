import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "../styles/App.css";
import avatar from "../components/Avatar.png";
import comButton from "../components/ComButton.png";
import Modal from "../components/ModalNew";
import ProjectForm from "../components/ProjectForm";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import InfoBlock from "../components/InfoBlock";

const Home = () => {
  //внутри компонента не объявлять кастомные компоненты - вызывать из components

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content-area">
      <Header />

      <main>
        <section id="section1">
          <div className="profile">
            <img src={avatar} alt="Аватарка" className="avatar" />
            <div className="profile-info">
              <h3>Анастасия Красун</h3>
              <p>разработчик 1С</p>
            </div>
            {/* вызываю кастомные компоненты: кастомная кнопка */}
            <CustomButton
              text="Обсудить проект"
              onClick={handleOpenModal}
              className="discuss-button"
            />
          </div>

          {/* InfoBlock */}
          <InfoBlock>
            <div className="centered-text">
              <h1>Автоматизация бизнес-процессов</h1>
              <h1>и повышение эффективности</h1>
              <h1>работы компании</h1>
              <p className="margins-top">реализую функциональные проекты</p>
              <p>и стратегические инструменты</p>
              <p>для достижения ваших целей</p>
            </div>
          </InfoBlock>

          <div className="centered-image">
            <img src={comButton} alt="Центральное изображение" />
          </div>

          {/* модальное окно */}
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ProjectForm
              onSubmit={() => {
                handleCloseModal();
              }}
            />
          </Modal>
        </section>
      </main>
    </div>
  );
};

export default Home;
