import React, { useEffect } from "react";

const ModalNew = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Закрыть">&times;</button>
        <div className="modal-header">
          <h2>Новый проект</h2>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default ModalNew;
