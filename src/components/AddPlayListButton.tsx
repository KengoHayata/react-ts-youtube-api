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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MyBox
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            sx={{
              backgroundColor: "white",
            }}
          />
          <MyButton variant="contained" color="warning" onClick={handleOpen}>
            作成
          </MyButton>
        </MyBox>
      </MyModal>
    </MyBox>
  );
};
