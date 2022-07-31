import React from "react";
import { Container, Label, Input } from "./styles";

interface InputProps {
  id: string;
  label: string;
  onChange: (id: string, value: any) => void;
  placeholder: string;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  onChange,
  id,
  placeholder,
}) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default InputComponent;
