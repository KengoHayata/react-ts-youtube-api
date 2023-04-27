import Button, { ButtonProps } from "@mui/material/Button";

type MyButtonProps = ButtonProps;

const MyButton = (props: MyButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default MyButton;
