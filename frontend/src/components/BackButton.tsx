import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.key !== "default") {
      navigate(-1);
    }
  };

  return <button onClick={handleBack}>Back</button>;
};

export default BackButton;
