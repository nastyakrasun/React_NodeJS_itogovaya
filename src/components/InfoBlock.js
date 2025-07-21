import React from 'react';

const InfoBlock = ({ title, description, children }) => (
    <div className="centred-text">
      <h1 className="title">{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );

export default InfoBlock;
