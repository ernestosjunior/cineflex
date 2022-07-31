import { Container, Subtitle, Text, Icon } from "./styles";

const SeatSubtitle = () => {
  const subtitles = [
    { color: "#8DD7CF", text: "Selecionado", borderColor: "#1AAE9E" },
    { color: "#C3CFD9", text: "Disponível", borderColor: "#7B8B99" },
    { color: "#FBE192", text: "Indisponível", borderColor: "#F7C52B" },
  ];
  return (
    <Container>
      {subtitles.map((subtitle) => (
        <Subtitle>
          <Icon color={subtitle.color} borderColor={subtitle.borderColor} />
          <Text>{subtitle.text}</Text>
        </Subtitle>
      ))}
    </Container>
  );
};

export default SeatSubtitle;
