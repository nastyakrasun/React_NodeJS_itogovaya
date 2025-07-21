import React from 'react';
import { Link } from 'react-router-dom'; //импортирую Link для навигации в приложениях React с использованием react-router-dom

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/stages">Этапы работы</Link></li>
          <li><Link to="/projects">Проекты</Link></li>
          <li><Link to="/cooperation">Сотрудничество</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
