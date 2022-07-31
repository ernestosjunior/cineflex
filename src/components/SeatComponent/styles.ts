import styled from "styled-components";

interface Props {
  isAvailable: boolean;
  selected: boolean;
}

export const Seat = styled.button<Props>`
  all: unset;
  cursor: pointer;
  min-width: 26px;
  min-height: 26px;
  border-radius: 50%;
  text-align: center;
  padding: 8px;
  color: #000000;
  letter-spacing: 0.04em;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  background: ${(props) =>
    props.isAvailable ? "#FBE192" : props.selected ? "#8DD7CF" : "#C3CFD9"};
  border: 1px solid
    ${(props) =>
      props.isAvailable ? "#F7C52B" : props.selected ? "#1AAE9E" : "#7B8B99"}; ;
`;
