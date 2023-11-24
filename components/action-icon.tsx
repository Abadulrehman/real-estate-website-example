import { FC } from "react";
import { IconType } from "react-icons";

type ActionIconProps = {
  title: string;
  icon: IconType;
};

const ActionIcon: FC<ActionIconProps> = props => (
  <div className="group relative flex h-24 w-24  md:h-36 md:w-36 items-center justify-center rounded-md border border-plgreen text-center transition-all hover:bg-plgreen">
    <div>
      <props.icon size="30" className="text-6xl text-plgreen" />
    </div>
    <div className="group-hover:text-white absolute text-transparent">
      {props.title}
    </div>
  </div>
);

export default ActionIcon;
