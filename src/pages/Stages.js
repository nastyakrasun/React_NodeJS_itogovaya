import React, { useState } from "react";
import Header from '../components/Header';
import icon from "../components/Icon.png";

const Stages = () => {
  const [openStages, setOpenStages] = useState([false, false, false, false]);

  const toggleDescription = (index) => {
    setOpenStages(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const stages = [
    "Знакомство",
    "Коммерческое предложение",
    "Договор",
    "Сотрудничество",
  ];

  const getStageDescription = (index) => {
    const descriptions = [
      "Созваниваемся, чтобы обсудить ваши бизнес-цели и потребности для разработки идеального решения, а также объем работ.",
      "После обсуждения я подготавливаю детализированное коммерческое предложение и сроки выполнения.",
      "Если предложение вам подходит, подписываем договор и вносите предоплату для старта работ.",
      "Проводим детальный анализ текущих бизнес-процессов и разрабатываем оптимальное решение для вашей компании.",
    ];
    return descriptions[index];
  };

  return (
    <div className="content-area">
      <Header />
      <main>
        <section id="section2">
          <div className="title-icon">
            <h2>Этапы работы</h2>
            <img src={icon} alt="Иконка" className="icon" />
          </div>
          <div className="left-text">
            {stages.map((stage, index) => (
              <div className="stage" key={index}>
                <div
                  className="stage-header"
                  onClick={() => toggleDescription(index)}
                >
                  <h3>{stage}</h3>
                  <span className="plus">{openStages[index] ? '-' : '+'}</span>
                </div>
                <p
                  className="stage-description"
                  style={{ display: openStages[index] ? "block" : "none" }}
                >
                  {getStageDescription(index)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stages;
