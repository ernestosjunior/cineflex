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
