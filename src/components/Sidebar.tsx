import MyBox from "./ui/MyBox";
import MyButton from "./ui/MyButton";
import { Link } from "react-router-dom";

const playlists = ["再生リスト名", "再生リスト名", "再生リスト名"];

const Sidebar = () => {
  return (
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
      {playlists.map((text) => (
        // TODO: 再生リスト名を押下した時、再生リスト画面に遷移させる
        // 仮で /playlists/:id に遷移させる
        <Link to="/playlists/:id">{text}</Link>
      ))}
      {/* TODO: 再生リスト作成を押下した時、モーダルを表示させる */}
      <MyButton variant="contained" color="warning">
        再生リスト追加
      </MyButton>
    </MyBox>
  );
};

export default Sidebar;
