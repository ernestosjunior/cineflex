import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 67px;
  background: #c3cfd9;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e8833a;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  cursor: pointer;
  position: relative;
`;

export const Content = styled.section`
  width: 100%;
  height: auto;
  flex: 1;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 117px;
  background: #c3cfd9;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 10px;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 89px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background-color: #ffffff;
`;

export const Image = styled.img`
  width: 48px;
  height: 72px;
  object-fit: cover;
`;

export const ContainerTextFooter = styled.div``;

export const FooterText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  color: #293845;
`;
