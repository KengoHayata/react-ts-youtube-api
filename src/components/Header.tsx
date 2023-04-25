import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Button variant="contained" color="primary" component={Link} to="/">
        TOP
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="https://accounts.google.com/o/oauth2/v2/auth"
      >
        ログイン
      </Button>
    </div>
  );
};

export default Header;
