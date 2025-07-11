import { FC } from "react";
import { icons } from "./icons";

export type IconType = keyof typeof icons;

export type IconProps = {
  height?: string;
  color?: string;
  fill?: string;
  stroke?: string;
  icon: IconType;
  width?: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
};

export const Icon: FC<IconProps> = ({
  width = "24px",
  height = "24px",
  color = "currentColor",
  icon,
  testId,
  ...props
}) => {
  const IconComponent = icons[icon];

  if (!IconComponent) return null;

  return (
    <IconComponent
      {...props}
      icon={icon}
      color={color}
      width={width}
      height={height}
      data-testid={testId || `icon-${icon}`}
    />
  );
};
