import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        sx={{ top: 20, left: 60 }}
        component={Link}
        to="/"
      >
        TOP
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ position: "absolute", top: 20, right: 60 }}
      >
        ログイン
      </Button>
    </div>
  );
};

export default Header;
