import React from "react";

interface Props {
  imageUrl: any;
  name: string;
  type?: string;
}

const Skill: React.FunctionComponent<Props> = ({ ...props }: Props) => (
  <div className="block-container w-20 h-20">
    <div className="btn-back rounded-xl" />
    <div className="btn-front rounded-xl flex justify-center items-center">
      <img
        src={props.imageUrl}
        alt={props.name}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
  </div>
);

export default Skill;
