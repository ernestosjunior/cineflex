import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title } from "../../globalStyles";
import { axiosInstance } from "../../service/api";
import { SeatsContainer, Form, SeatContainer, Button } from "./styles";
import { SeatComponent, SeatSubtitle, InputComponent } from "../../components";
import { hasFooter } from "../../utils/hasFooter";

interface SeatPageProps {
  handleFields: (field: string, value: string) => void;
  setFooter: (state: boolean) => void;
}

const SeatPage: React.FC<SeatPageProps> = ({ handleFields, setFooter }) => {
  const [seats, setSeats] = useState([]);
  const { idSession } = useParams();

  const inputs = [
    {
      label: "Nome do comprador:",
      id: "name",
      placeholder: "Digite seu nome...",
    },
    {
      label: "CPF do comprador:",
      id: "cpf",
      placeholder: "Digite seu CPF...",
    },
  ];

  useEffect(() => {
    setFooter(true);
    const fetchSeats = async () => {
      const res = await axiosInstance.get(`/showtimes/${idSession}/seats`);
      setSeats(res.data.seats);
    };
    fetchSeats();
    // eslint-disable-next-line
  }, []);

  return (
    <SeatContainer hasFooter={hasFooter()}>
      <Title>{`Selecione o(s) assento(s)`}</Title>
      <SeatsContainer>
        {seats.map((seat: any) => (
          <SeatComponent
            name={seat.name}
            isAvailable={seat.isAvailable}
            id={seat.id}
            onClick={handleFields}
          />
        ))}
      </SeatsContainer>
      <SeatSubtitle />
      <Form>
        {inputs.map((input) => (
          <InputComponent
            label={input.label}
            placeholder={input.placeholder}
            id={input.id}
            onChange={handleFields}
          />
        ))}
        <Button>Reservar assento(s)</Button>
      </Form>
    </SeatContainer>
  );
};

export default SeatPage;
