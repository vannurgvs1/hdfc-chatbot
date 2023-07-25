import React from "react";
import "./Accountcheque.css";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import Accountlogin from "./Accountlogin";

const Accountcheque = () => {
  return (
    <div className="head-line">
      <p>
        Hi, I am <span>Hawk</span> your Guide to Quick Services
      </p>
      <hr />
      <div className="Border-Line">
        <div className="Box-Wrap">
          <p>Hello peter,Please select anyone option</p>
          <button className="Che-service">Cheque Services</button>
          <div className="Btn-Accnt">
            <button className="Btn-Tag">Cheque Services</button>
            <button className="Btn-Tag">Cheque Book Request</button>
            <button className="Btn-Tag">Cheque Stop Payment</button>
          </div>
        </div>
      </div>
      <div>
        <button className="Back-Btn">Back To Menu</button>
      </div>
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginTop: "6px", marginBottom: "3px" }}
      >
        <input
          type="text"
          placeholder="text here"
          style={{ width: "87%", minHeight: "20px" }}
        />
        <SendIcon />
      </Stack>
    </div>
  );
};

export default Accountcheque;
