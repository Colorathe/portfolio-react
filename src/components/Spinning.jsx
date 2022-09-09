import React from "react";

const Spinning = ({ text, children }) => {
  const lenght = text.length;
  const deg = 360 / lenght;

  return (
    <div className="spinning-text-wrapper">
      <div className="spinning-text text-gray-600 dark:text-gray-300">
        <p>
          {text.split("").map((letra, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${deg * i}deg)`,
              }}
            >
              {letra}
            </span>
          ))}
        </p>
      </div>
      {children}
    </div>
  );
};

export default Spinning;
