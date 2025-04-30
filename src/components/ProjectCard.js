// import React, { useState } from "react";

// const ProjectCard = ({ project, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);

//   const [editedTitle, setEditedTitle] = useState(project.title);
//   const [editedDescription, setEditedDescription] = useState(
//     project.description
//   );

//   const [editedLink, setEditedLink] = useState(project.link || "");

//   const handleSave = () => {
//     if (!editedTitle.trim()) return;

//     onEdit({
//       ...project,
//       title: editedTitle.trim(),
//       description: editedDescription.trim(),
//       link: editedLink.trim(),
//     });

//     setIsEditing(false);
//   };

//   return (
//     <div className="project-card">
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={editedTitle}
//             onChange={(e) => setEditedTitle(e.target.value)}
//             placeholder="Название проекта"
//           />
//           <textarea
//             value={editedDescription}
//             onChange={(e) => setEditedDescription(e.target.value)}
//             placeholder="Описание проекта"
//           />
//           <input
//             type="text"
//             value={editedLink}
//             onChange={(e) => setEditedLink(e.target.value)}
//             placeholder="Ссылка на проект"
//           />
//           <button onClick={handleSave} disabled={!editedTitle.trim()}>
//             Сохранить
//           </button>
//           <button onClick={() => setIsEditing(false)}>Отмена</button>
//         </>
//       ) : (
//         <>
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//           <p>{project.link}</p>
//           <button onClick={() => setIsEditing(true)}>Редактировать</button>
//           <button onClick={onDelete}>Удалить</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProjectCard;
