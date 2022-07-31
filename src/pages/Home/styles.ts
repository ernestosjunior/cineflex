import styled from "styled-components";

interface Props {
  hasFooter: boolean;
}

export const Movies = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: ${(props) => (!props.hasFooter ? "8vh" : "24vh")};
`;
