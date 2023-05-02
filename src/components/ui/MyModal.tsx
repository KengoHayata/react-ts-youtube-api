import { Modal, ModalProps } from "@mui/material";

type MyModalProps = ModalProps;

export const MyModal = (props: MyModalProps) => {
  return <Modal {...props}>{props.children}</Modal>;
};
