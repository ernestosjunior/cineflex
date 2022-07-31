import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Footer,
  Content,
  ContainerImg,
  Image,
  FooterText,
  ContainerTextFooter,
} from "./styles";
import { Fields } from "../../App";

interface BaseLayoutProps {
  children?: React.ReactNode;
  hasFooter: boolean;
  fields: Fields;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  hasFooter,
  fields,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header onClick={() => navigate("../")}>CINEFLEX</Header>
      <Content>{children}</Content>
      {hasFooter && (
        <Footer>
          <ContainerImg>
            <Image src={fields.movieImg} />
          </ContainerImg>
          <ContainerTextFooter>
            <FooterText>{fields.movie}</FooterText>
            <FooterText>{fields.session}</FooterText>
          </ContainerTextFooter>
        </Footer>
      )}
    </Container>
  );
};

export default BaseLayout;
