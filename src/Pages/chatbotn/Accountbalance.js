import React from "react";
import "./Accountbalance.css";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import Accountlogin from "./Accountlogin";

const Accountbalance = () => {
  const navigate = useNavigate();
  const getAccountLogin = () => {
    navigate("/accountlogin");
  };
  const getAccountpage = () => {
    navigate("/page");
  };
  return (
    <div className="heading">
      <p>
        Hi, I am <span>Hawk</span> your Guide to Quick Services
      </p>
      <hr />
      <div className="box-wrap">
        <div className="btn-Accnt">
          <button className="btntag">Account Balance</button>
          <button className="btntag">Mini Statement</button>

          <button className="btntag">Cheque Services</button>
          <button className="btntag">Download Stmt</button>

          <button className="btntag">Stop Payment</button>

          <button className="btntag">Debit Card Hostlisting</button>

          <button className="btntag">Order Chq Book</button>

          <button className="btntag">Open SB Account</button>
        </div>
        <div>
          <button className="Accnt-btn">1.Account Balance</button>
        </div>
        <div className="border">
          <p className="para">Please Login To Check Balance</p>
          <button className="Accnt-Login" onClick={getAccountLogin}>
            LOGIN
          </button>
        </div>
      </div>
      <div>
        <button className="backbtn" onClick={getAccountpage}>
          Back To Menu
        </button>
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

export default Accountbalance;
