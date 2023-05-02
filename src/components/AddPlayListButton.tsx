import { TextField } from "@mui/material";
import React, { useState } from "react";
import { MyModal } from "./ui/MyModal";
import MyButton from "./ui/MyButton";
import MyBox from "./ui/MyBox";

export const AddPlayListButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MyBox>
      <MyButton variant="contained" color="warning" onClick={handleOpen}>
        再生リスト追加
      </MyButton>
      <MyModal
        open={open}
        onClose={handleClose}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MyBox>
          <TextField
            id="add-playlist-field"
            label="再生リスト名"
            variant="filled"
            sx={{
              backgroundColor: "white",
            }}
          />
          <MyButton
            variant="contained"
            color="warning"
            onClick={handleOpen}
            style={{ marginTop: "10px", marginLeft: "10px" }}
          >
            作成
          </MyButton>
        </MyBox>
      </MyModal>
    </MyBox>
  );
};
