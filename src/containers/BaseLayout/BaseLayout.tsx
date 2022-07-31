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
import { ReactComponent as ArrowIcon } from "../../assets/arrow-back.svg";

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
      <Header>
        <ArrowIcon
          style={{ width: "32px", position: "absolute", left: "4%" }}
          onClick={() => navigate(-1)}
        />
        <span onClick={() => navigate("../")}>CINEFLEX</span>
      </Header>
      <Content>{children}</Content>
      {hasFooter && (
        <Footer>
          <ContainerImg>
            <Image src={fields.movieImg} />
          </ContainerImg>
          <ContainerTextFooter>
            <FooterText>{fields.movie}</FooterText>
            <FooterText>{fields.sessionDay}</FooterText>
          </ContainerTextFooter>
        </Footer>
      )}
    </Container>
  );
};

export default BaseLayout;
