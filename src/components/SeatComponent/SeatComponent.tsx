import { useState } from "react";
import { Seat } from "./styles";

const SeatComponent: React.FC<any> = ({ name, isAvailable, id, onClick }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Seat
      isAvailable={isAvailable}
      selected={selected}
      onClick={() => {
        setSelected(!selected);
        onClick("seats", id);
      }}
    >
      {name}
    </Seat>
  );
};

export default SeatComponent;
