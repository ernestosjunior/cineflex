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
`;
