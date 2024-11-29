import React from "react";

const StarRating = ({ rate = 1, handleRating }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span
          key={i + 1}
          onClick={() => handleRating(i + 1)}
          style={{
            color: i + 1 <= rate ? "gold" : "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
