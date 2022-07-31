import React from "react";
import { Container, Header, Footer, Content } from "./styles";

interface BaseLayoutProps {
  children?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const path = window.location.pathname;
  const hasFooter = path.includes("/sessoes") || path.includes("/assentos");
  return (
    <Container>
      <Header>CINEFLEX</Header>
      <Content>{children}</Content>
      {hasFooter && <Footer>Este é o footer</Footer>}
    </Container>
  );
};

export default BaseLayout;
