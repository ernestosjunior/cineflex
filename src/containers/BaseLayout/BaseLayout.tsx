import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Footer, Content } from "./styles";

interface BaseLayoutProps {
  children?: React.ReactNode;
  hasFooter: boolean;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, hasFooter }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header onClick={() => navigate("../")}>CINEFLEX</Header>
      <Content>{children}</Content>
      {hasFooter && <Footer>Este é o footer</Footer>}
    </Container>
  );
};

export default BaseLayout;
