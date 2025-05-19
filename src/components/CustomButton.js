import React from 'react';

const CustomButton = ({ text, onClick, className, link, target = "_blank", rel = "noopener noreferrer" }) => {
  const buttonElement = (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );

  if (link) {
    return (
      <a href={link} target={target} rel={rel}>
        {buttonElement}
      </a>
    );
  }

  return buttonElement;
};

export default CustomButton;
