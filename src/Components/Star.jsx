import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ x }) => {
  const stars = [];

  for (let i = 0; i < x; i++) {
    stars.push(<FaStar key={i} size={25} style={{ color: "#ffc107" }} />);
  }

  return (
    <div>
      {stars}
    </div>
  );
};

export default Star;