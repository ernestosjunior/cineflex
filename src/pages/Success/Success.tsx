import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../globalStyles";
import {
  SuccessTitle,
  Section,
  SectionTitle,
  SectionContent,
  ContainerPage,
  Top,
  Loading,
} from "./styles";
import { Fields } from "../../App";
import loadingIcon from "../../assets/loading.gif";
import { axiosInstance } from "../../service/api";

interface SuccessPageProps {
  fields: Fields;
  setFooter: (state: boolean) => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ fields, setFooter }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setFooter(false);
    const sendToApi = async () => {
      const body = {
        ids: fields.seats,
        name: fields.name,
        cpf: fields.cpf,
      };
      await axiosInstance.post("/seats/book-many", body);
    };
    setLoading(false);
    sendToApi();
    // eslint-disable-next-line
  }, []);

  return (
    <ContainerPage>
      {loading ? (
        <Loading src={loadingIcon} alt="" />
      ) : (
        <>
          <Top>
            <SuccessTitle>Pedido feito com sucesso!</SuccessTitle>
            <Section>
              <SectionTitle>Filme e sessão</SectionTitle>
              <SectionContent>{fields.movie}</SectionContent>
              <SectionContent>{fields.session}</SectionContent>
            </Section>
            <Section>
              <SectionTitle>Ingressos</SectionTitle>
              {fields.seats.map((seat) => (
                <SectionContent>Assento {seat}</SectionContent>
              ))}
            </Section>
            <Section>
              <SectionTitle>Comprador</SectionTitle>
              <SectionContent>Nome: {fields.name}</SectionContent>
              <SectionContent>CPF: {fields.cpf}</SectionContent>
            </Section>
          </Top>

          <Button onClick={() => navigate("../")}>Voltar pra Home</Button>
        </>
      )}
    </ContainerPage>
  );
};

export default SuccessPage;
