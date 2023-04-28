import MyAppBar from "./ui/MyAppBar";
import MyButton from "./ui/MyButton";

const Header = () => {
  return (
    <MyAppBar
      sx={{
        backgroundColor: "cyan",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <MyButton variant="contained" color="primary" href="/" size="small">
        TOP
      </MyButton>
      {/* TODO: ボタンを押したら、OAuthでログインする機能を実装する */}
      {/* TODO: ログアウトボタンを横に追加するか、ログイン後ログアウトボタンに切り替える */}
      <MyButton variant="contained" color="primary" size="small">
        ログイン
      </MyButton>
    </MyAppBar>
  );
};

export default Header;
