import React from 'react';
import '../Styles/ImageCard.css';

export const ImageCard = ({image,title,description}) => {
  return (
    <div
      className="img-card"
      style={{
        position: "relative",
        width: "433px",
        height: "222px",
        borderRadius: "15px",
      }}
    >
      <div
        className="img-card-overlay"
        style={{
          position: "absolute",
          
          width: "100%",
          height: "100%",
          backgroundImage:
            `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "15px",
          filter: "brightness(50%)",
        }}
      ></div>
      <div className="bottom-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
