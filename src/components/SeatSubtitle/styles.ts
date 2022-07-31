import styled from "styled-components";

interface IconProps {
  color: string;
  borderColor: string;
}
export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  gap: 8px;
`;

export const Text = styled.span`
  color: #4e5a65;
  letter-spacing: -0.013em;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
`;

export const Icon = styled.span<IconProps>`
  min-width: 26px;
  min-height: 26px;
  padding: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
`;
