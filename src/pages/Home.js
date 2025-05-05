import React, { useState } from "react";
import { Link } from "react-router-dom"; //импортирую Link для навигации в приложениях React с использованием react-router-dom
import "../styles/App.css"; //подключаю CSS файл для стилизации
import avatar from "../components/Avatar.png";
import comButton from "../components/ComButton.png";
import Modal from "../components/ModalNew";
import ProjectForm from "../components/ProjectForm";
import Header from '../components/Header';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // состояние для управления модальным окном

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content-area">
      {/* <nav> */}
        {/* <ul>
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
      </nav> */}
       <Header />

      <main>
        <section id="section1">
          <div className="profile">
            <img src={avatar} alt="Аватарка" className="avatar" />
            <div className="profile-info">
              <h3>Анастасия Красун</h3>
              <p>разработчик 1С</p>
            </div>
            <button className="discuss-button" onClick={handleOpenModal}>
              Обсудить проект
            </button>
          </div>
          <h1>Автоматизация бизнес-процессов</h1>
          <h1>и повышение эффективности</h1>
          <h1>работы компании</h1>
          <div className="centered-text">
            <p>реализую функциональные проекты</p>
            <p>и стратегические инструменты</p>
            <p>для достижения ваших целей</p>
          </div>
          <div className="centered-image">
            <img src={comButton} alt="Центральное изображение" />
          </div>

          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ProjectForm onSubmit={() => { handleCloseModal(); }} />
          </Modal>

          {/*создать кастомный компонент для кнопки "обсудить проект" + еще 1 кастомный компонент*/}

        </section>
      </main>

      {/* <footer className="footer">
        <p>&copy; 2025 Анастасия Красун. Все права защищены.</p>
      </footer> */}
    </div>
  );
};

export default Home;
