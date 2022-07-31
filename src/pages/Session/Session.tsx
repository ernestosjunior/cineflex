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
}

type Session = {
  weekday: string;
  date: string;
  showtimes: { name: string; id: number }[];
}[];

const Buttons: React.FC<any> = ({ showtimes = [] }) => {
  const navigate = useNavigate();
  if (!showtimes.length) return null;

  return (
    <ContainerButtons>
      {showtimes.map((time: any) => (
        <Button onClick={() => navigate(`/assentos/${time.id}`)}>
          {time.name}
        </Button>
      ))}
    </ContainerButtons>
  );
};

const SessionPage: React.FC<SessionPageProps> = ({ setFooter }) => {
  const [sessions, setSessions] = useState<Session>([]);
  const { idFilme } = useParams();

  useEffect(() => {
    setFooter(true);
    const fetchMovies = async () => {
      const res = await axiosInstance.get(`/movies/${idFilme}/showtimes`);
      setSessions(res.data.days);
    };
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <Sessions hasFooter={hasFooter()}>
      <Title>Selecione o horário</Title>
      {sessions.map((session: any) => (
        <ContainerDay>
          <Day>{`${session.weekday} - ${session.date}`}</Day>
          <Buttons showtimes={session.showtimes} />
        </ContainerDay>
      ))}
    </Sessions>
  );
};

export default SessionPage;
