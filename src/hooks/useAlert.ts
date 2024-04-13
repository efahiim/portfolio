import { useState } from "react";

export type AlertType = "danger" | "success";

interface Alert {
  show: boolean;
  text: string;
  type: AlertType;
}

const useAlert = () => {
  const [alert, setAlert] = useState<Alert>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({
    text,
    type = "danger",
  }: {
    text: string;
    type: AlertType;
  }): void =>
    setAlert({
      show: true,
      text,
      type,
    });

  const hideAlert = (): void =>
    setAlert({
      show: true,
      text: "",
      type: "danger",
    });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
