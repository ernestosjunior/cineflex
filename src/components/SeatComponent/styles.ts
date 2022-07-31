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
    props.selected && props.isAvailable
      ? "#8DD7CF"
      : !props.isAvailable
      ? "#FBE192"
      : "#C3CFD9"};
  border: 1px solid
    ${(props) =>
      props.selected && props.isAvailable
        ? "#1AAE9E"
        : !props.isAvailable
        ? "#F7C52B"
        : "#808F9D"};
`;
