import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Title } from "../../globalStyles";
import { axiosInstance } from "../../service/api";
import {
  ContainerDay,
  Day,
  Button,
  ContainerButtons,
  Sessions,
} from "./styles";
import { hasFooter } from "../../utils/hasFooter";
interface SessionPageProps {
  setFooter: (state: boolean) => void;
  handleFields: (field: string, value: string) => void;
}

type Session = {
  weekday: string;
  date: string;
  showtimes: { name: string; id: number }[];
}[];

const Buttons: React.FC<any> = ({ showtimes = [], handleFields, date }) => {
  const navigate = useNavigate();
  if (!showtimes.length) return null;

  return (
    <ContainerButtons>
      {showtimes.map((time: any) => (
        <Button
          onClick={() => {
            handleFields("session", `${date} ${time.name}`);
            navigate(`../assentos/${time.id}`);
          }}
        >
          {time.name}
        </Button>
      ))}
    </ContainerButtons>
  );
};

const SessionPage: React.FC<SessionPageProps> = ({
  setFooter,
  handleFields,
}) => {
  const [sessions, setSessions] = useState<Session>([]);
  const { idMovie } = useParams();

  useEffect(() => {
    setFooter(true);
    const fetchSessions = async () => {
      const res = await axiosInstance.get(`/movies/${idMovie}/showtimes`);
      setSessions(res.data.days);
    };
    fetchSessions();
    // eslint-disable-next-line
  }, []);

  return (
    <Sessions hasFooter={hasFooter()}>
      <Title>Selecione o horário</Title>
      {sessions.map((session: any) => (
        <ContainerDay>
          <Day>{`${session.weekday} - ${session.date}`}</Day>
          <Buttons
            showtimes={session.showtimes}
            handleFields={handleFields}
            date={session.date}
          />
        </ContainerDay>
      ))}
    </Sessions>
  );
};

export default SessionPage;
