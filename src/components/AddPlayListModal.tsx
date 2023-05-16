import { Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";
import { MyModal } from "./ui/MyModal";
import MyButton from "./ui/MyButton";
import MyBox from "./ui/MyBox";

export const AddPlayListModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MyBox>
      <MyButton variant="contained" color="warning" onClick={handleOpen}>
        追加
      </MyButton>
      <MyModal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <TextField
              id="add-playlist-field"
              label="再生リスト名"
              variant="filled"
            />
            {/* <MyButton variant="contained" color="warning" onClick={handleOpen}>
              作成
            </MyButton> */}
          </CardContent>
        </Card>
      </MyModal>
    </MyBox>
  );
};
