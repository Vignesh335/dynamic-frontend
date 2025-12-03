import type { ComponentItem } from "../types";

const Card = ({ heading, content }: ComponentItem) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "20px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{heading}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
