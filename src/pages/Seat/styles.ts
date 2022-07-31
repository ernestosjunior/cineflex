import styled from "styled-components";

interface Props {
  hasFooter: boolean;
}

export const SeatsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 19px;
  column-gap: 8px;
`;

export const Form = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 8%;
`;

export const SeatContainer = styled.main<Props>`
  margin-bottom: ${(props) => (!props.hasFooter ? "8vh" : "24vh")};
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  background: #e8833a;
  border-radius: 3px;
  width: 225px;
  height: 42px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-top: 57px;
`;
