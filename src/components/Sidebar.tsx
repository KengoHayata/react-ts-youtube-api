import MyBox from "./ui/MyBox";
import { Link } from "react-router-dom";
import { AddPlayListButton } from "./AddPlayListButton";

const playlists = ["再生リスト名", "再生リスト名", "再生リスト名"];

export const Sidebar = () => {
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
      <AddPlayListButton />
    </MyBox>
  );
};
