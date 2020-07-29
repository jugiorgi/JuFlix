import React from "react";
import { Container } from './styles';

function FormField({ label, type, name, value, onChange }) {
  return (
    <Container>
      <label>
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </Container>
  )
}

export default FormField;