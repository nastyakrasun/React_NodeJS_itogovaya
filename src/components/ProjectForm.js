import React, { useState, useEffect } from "react";

const ProjectForm = ({ initialData }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных");
      }

      setFormData({ title: "", description: "", link: "" }); // сброс данных формы после успешной отправки
      alert("Проект успешно добавлен!");
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось добавить проект. Попробуйте еще раз.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Название проекта"
        className="modal-text"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Описание проекта"
        className="modal-text"
        required
      />
      <input
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="Ссылка на проект"
        className="modal-text"
        required
      />
      <button
        type="submit"
        className="modal-button"
      >
        Отправить
      </button>
    </form>
  );
};

export default ProjectForm;
