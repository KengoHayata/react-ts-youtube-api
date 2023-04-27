import { Box, BoxProps } from "@mui/material";

type MyBoxProps = BoxProps;

const MyBox = (props: MyBoxProps) => {
  return <Box {...props}>{props.children}</Box>;
};

export default MyBox;
