import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Stack } from "@mui/material";

export const ShowVideoIndex = () => {
  const [data, setData] = useState<any>();

  const getVideos = () => {
    axios.get("").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      {data?.items.map((item: any) => (
        <Card
          sx={{
            width: "33.333333%",
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={item.snippet.thumbnails.default.url}
            alt="thumbnails"
          />
          <CardContent>
            <div>{item.snippet.title}</div>
            <div>{item.snippet.channelTitle}</div>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};
