import MyBox from "./ui/MyBox";
import MyButton from "./ui/MyButton";

const Header = () => {
  return (
    <MyBox>
      <MyButton
        variant="contained"
        color="primary"
        sx={{ marginTop: 3, marginLeft: 7.4 }}
        href="/"
      >
        TOP
      </MyButton>
      {/* TODO: ボタンを押したら、OAuthでログインする機能を実装する */}
      {/* TODO: ログアウトボタンを横に追加するか、ログイン後ログアウトボタンに切り替える */}
      <MyButton
        variant="contained"
        color="primary"
        sx={{ marginTop: 3, marginLeft: 155 }}
      >
        ログイン
      </MyButton>
    </MyBox>
  );
};

export default Header;
