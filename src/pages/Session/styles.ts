import styled from "styled-components";

interface Props {
  hasFooter: boolean;
}

export const Sessions = styled.div<Props>`
  margin-bottom: ${(props) => (!props.hasFooter ? "8vh" : "24vh")};
`;

export const ContainerDay = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;

export const Day = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.02em;
  color: #293845;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
  color: #ffffff;
  width: 83px;
  height: 43px;
  background: #e8833a;
  border-radius: 3px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 8px;
  margin: 23px 0;
`;
