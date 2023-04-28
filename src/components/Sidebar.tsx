import MyBox from "./ui/MyBox";
import MyButton from "./ui/MyButton";

const buttons = [
  "再生リスト名",
  "再生リスト名",
  "再生リスト名",
  "再生リスト作成",
];

const Header = () => {
  return (
    // TODO: 再生リスト名を押下した時、再生リスト画面に遷移させる
    // TODO: 再生リスト作成を押下した時、モーダルを表示させる
    <MyBox
      sx={{
        width: 200,
        marginTop: 8,
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "green",
        gap: "30px",
      }}
    >
      {buttons.map((text, index) => (
        <MyButton key={index} variant="contained" color="warning">
          {text}
        </MyButton>
      ))}
    </MyBox>
  );
};

export default Header;
