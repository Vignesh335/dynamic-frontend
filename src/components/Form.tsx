import { useState } from "react";
import { fetchComponentData } from "../api/api";
import type { ComponentItem } from "../types";

const Form = ({ fields, buttons, submitApi }: ComponentItem) => {
  const initialState = fields?.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}) || {};
  const [formData, setFormData] = useState<any>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchComponentData(submitApi || "", { method: "POST", data: formData })
      .then(res => alert("Form submitted successfully"))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      {fields?.map(field => (
        <div key={field.name} style={{ marginBottom: "10px" }}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
        </div>
      ))}
      {buttons?.map(button => (
        <button key={button.label} type={button.type as "submit"} style={{ marginTop: "10px" }}>
          {button.label}
        </button>
      ))}
    </form>
  );
};

export default Form;
