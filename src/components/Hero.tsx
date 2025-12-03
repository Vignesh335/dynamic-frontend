import type { ComponentItem } from "../types";

const Hero = ({ heading, subtext }: ComponentItem) => {
  return (
    <div style={{ padding: "40px", background: "#1E90FF", color: "white", marginBottom: "20px" }}>
      <h1>{heading}</h1>
      <p>{subtext}</p>
    </div>
  );
};

export default Hero;
