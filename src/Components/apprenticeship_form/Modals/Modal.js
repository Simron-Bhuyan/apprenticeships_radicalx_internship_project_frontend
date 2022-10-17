import React from "react";
import styles from "./modal.module.css";
import Button from "@mui/material/Button";
import { body } from "../../../index_DOM_Fetcher.js";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Modal = ({ form_title, show, onClose, children }) => {
  if (!show) {
    return null;
  }

  const unfreezeBody = () => {
    body.style.overflow = "auto";
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.modalhead}>
          <div id={styles.modalHeader}>{form_title}</div>
          <div style={{ alignSelf: "center" }}>
            <Button id={styles.btnrole}>Save</Button>
          </div>
          <div>
            <CloseRoundedIcon
              style={{ cursor: "pointer", color: "#292D32" }}
              onClick={() => {
                onClose();
                unfreezeBody();
              }}
              className={`${styles.btnClose} btn-close`}
            />
          </div>
        </div>
        <div className={styles.modalbody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
