import React from "react";
import { Container, Header, Footer, Content } from "./styles";

interface BaseLayoutProps {
  children?: React.ReactNode;
  hasFooter: boolean;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, hasFooter }) => {
  return (
    <Container>
      <Header>CINEFLEX</Header>
      <Content>{children}</Content>
      {hasFooter && <Footer>Este é o footer</Footer>}
    </Container>
  );
};

export default BaseLayout;
