import React from "react";
import { AlertType } from "@hooks/useAlert";

interface Props {
  type: AlertType;
  text: string;
}

const Alert: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  return (
    <div className="absolute top-10 left-10 right-0 flex justify-center items-center">
      <div
        className={`${
          props.type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${
            props.type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {props.type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{props.text}</p>
      </div>
    </div>
  );
};

export default Alert;
