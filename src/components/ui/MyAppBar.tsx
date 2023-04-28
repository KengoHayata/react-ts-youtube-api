import AppBar from "@mui/material/AppBar";
import { Toolbar, ToolbarProps } from "@mui/material";

type MyAppBarProps = ToolbarProps;

const MyAppBar = (props: MyAppBarProps) => {
  return (
    <AppBar>
      <Toolbar component="nav" variant="dense" {...props}>
        {props.children}
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
