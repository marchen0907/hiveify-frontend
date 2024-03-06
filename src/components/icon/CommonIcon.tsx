import type { GetProps } from "antd";
import Icon from "@ant-design/icons";

type IconComponentProps = GetProps<typeof Icon>;

const MoreSvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M127.6416 489.1136m-93.8496 0a1.833 1.833 0 1 0 187.6992 0 1.833 1.833 0 1 0-187.6992 0Z"></path>
      <path d="M497.408 489.1136m-93.8496 0a1.833 1.833 0 1 0 187.6992 0 1.833 1.833 0 1 0-187.6992 0Z"></path>
      <path d="M867.1744 489.1136m-93.8496 0a1.833 1.833 0 1 0 187.6992 0 1.833 1.833 0 1 0-187.6992 0Z"></path>
    </svg>
  );
};

export const MoreIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={MoreSvg} {...props} />
);
