import React from "react";
import { Container, Header, Footer, Content } from "./styles";

interface BaseLayoutProps {
  children?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>CINEFLEX</Header>
      <Content>{children}</Content>
      <Footer>Este é o footer</Footer>
    </Container>
  );
};

export default BaseLayout;
