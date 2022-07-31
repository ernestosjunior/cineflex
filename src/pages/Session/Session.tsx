import React from "react";

interface SessionPageProps {
  setFooter: (state: boolean) => void;
}

const SessionPage: React.FC<SessionPageProps> = ({ setFooter }) => {
  setFooter(true);
  return <></>;
};

export default SessionPage;
