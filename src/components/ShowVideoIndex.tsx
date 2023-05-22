import axios from "axios";
import MyAppBar from "./ui/MyAppBar";
import MyButton from "./ui/MyButton";
import { useEffect, useState } from "react";

export const ShowVideoIndex = () => {
  const [data, setData] = useState<any>();

  // const getPateleVideos = () => {
  //   axios.get().then((res) => {
  //     setData(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getPateleVideos();
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 34,
      }}
    >
      {/* getExampleComを実行するボタン */}
      {data?.items.map((item: any) => (
        <>
          <div>{item.snippet.title}</div>
          <img src={item.snippet.thumbnails.default.url} alt="thumbnails" />
        </>
      ))}
    </div>
  );
};
