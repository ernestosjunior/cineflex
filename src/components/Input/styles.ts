import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #293845;
`;

export const Input = styled.input`
  all: unset;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  padding-left: 4px;
  outline: none;
  height: 51px;
`;
