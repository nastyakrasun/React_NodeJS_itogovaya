import React, { useState, useEffect } from "react";
import { ProjectContext } from "../context/ProjectContext";

const ModalReady = ({ isOpen, onClose }) => {
  const { projects, deleteProject, editProject } =
    React.useContext(ProjectContext);

  const [editingId, setEditingId] = useState(null);
  const [editedProject, setEditedProject] = useState({
    title: "",
    description: "",
    link: "",
  });

  useEffect(() => {
    if (!isOpen) {
      setEditingId(null);
      setEditedProject({ title: "", description: "", link: "" });
    }
  }, [isOpen]);

  const startEditing = (project) => {
    setEditingId(project.id);
    setEditedProject({
      title: project.title,
      description: project.description || "",
      link: project.link || "",
    });
  };

  const saveEdit = async () => {
    try {
      await editProject({
        id: editingId,
        ...editedProject,
        title: editedProject.title.trim(),
        description: editedProject.description.trim(),
        link: editedProject.link.trim(),
      });
      setEditingId(null);
      setEditedProject({ title: "", description: "", link: "" });
    } catch (error) {
      console.error("Ошибка при сохранении проекта:", error);
      alert("Не удалось сохранить изменения. Попробуйте еще раз.");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedProject({ title: "", description: "", link: "" });
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Закрыть"
        >
          &times;
        </button>
        <h2>Сохраненные проекты</h2>

        {projects.length === 0 && <p>Проекты отсутствуют.</p>}

        <ul>
          {projects.map((project) => (
            <li key={project.id} style={{ marginBottom: "10px" }}>
              {editingId === project.id ? (
                <>
                  <form className="modal-content" onSubmit={(e) => { e.preventDefault(); saveEdit(); }}>
                    <input
                      type="text"
                      value={editedProject.title}
                      onChange={(e) =>
                        setEditedProject({
                          ...editedProject,
                          title: e.target.value,
                        })
                      }
                      placeholder="Название проекта"
                      autoFocus
                      style={{ display: 'block', width: '100%', marginBottom: '20px', boxSizing: 'border-box' }}
/>
                    <textarea
                      value={editedProject.description}
                      onChange={(e) =>
                        setEditedProject({
                          ...editedProject,
                          description: e.target.value,
                        })
                      }
                      placeholder="Описание проекта"
                      style={{ display: 'block', width: '100%', marginBottom: '16px', boxSizing: 'border-box' }}
/>
                    <input
                      type="text"
                      value={editedProject.link}
                      onChange={(e) =>
                        setEditedProject({
                          ...editedProject,
                          link: e.target.value,
                        })
                      }
                      placeholder="Ссылка на проект"
                      style={{ display: 'block', width: '100%', marginBottom: '16px', boxSizing: 'border-box' }}
/>
                    </form>
                    <button className="ready-button" type="submit" onClick={saveEdit} disabled={!editedProject.title.trim()}>Сохранить</button>
                    <button className="ready-button" type="button" onClick={cancelEdit}>Отмена</button>
                  
                </>
              ) : (
                <>
                  <span>
                    <strong>{project.title}</strong>
                  </span>
                  <br />
                  <span>{project.description}</span>
                  <br />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link}
                  </a>
                  <br />
                  <button className="ready-button" onClick={() => startEditing(project)}>Редактировать</button>{" "}
                  <button className="ready-delbutton" onClick={() => {
                      if (window.confirm("Вы уверены, что хотите удалить этот проект?")
                      ) {deleteProject(project.id);}
                    }}>Удалить</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalReady;
