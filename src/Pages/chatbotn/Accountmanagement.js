import React from "react";
import "./Accountmanagement.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const Accountmanagement = () => {
  const navigate = useNavigate();
  const getAccountbalance = () => {
    navigate("/accountbalance");
  };
  const getAccountpage = () => {
    navigate("/page");
  };
  return (
    <div className="heading helpBox">
      <p>
        Hi, I am <span>Hawk</span>, your Guide to Quick Services
      </p>
      <hr />
      <div>
        <button className="button">1.Account Management</button>
      </div>
      <div className="in-button">
        <p>Account Management</p>
      </div>
      <div className="stylee">
        <div className="btn-wrapper">
          <button className="helpbtn" onClick={getAccountbalance}>
            1.Account Balance
          </button>
          <button className="helpbtn" onClick={getAccountbalance}>
            2.Mini Statement
          </button>

          <button className="helpbtn" onClick={getAccountbalance}>
            3.Cheque Services
          </button>
          <button className="helpbtn" onClick={getAccountbalance}>
            4.Download Stmt
          </button>

          <button className="helpbtn" onClick={getAccountbalance}>
            5.Stop Payment
          </button>

          <button className="helpbtn" onClick={getAccountbalance}>
            6.Debit Card Hostlisting
          </button>

          <button className="helpbtn" onClick={getAccountbalance}>
            7.Order Chq Book
          </button>

          <button className="helpbtn" onClick={getAccountbalance}>
            8.Open SB Account
          </button>
        </div>
      </div>
      <div>
        <button className="backmenu" onClick={getAccountpage}>
          Back To Menu
        </button>
      </div>

      <Stack
        direction="row"
        spacing={1}
        sx={{ marginTop: "6px", marginBottom: "3px" }}
      >
        <input
          type="text"
          placeholder="text here"
          style={{ width: "85%", minHeight: "20px" }}
        />
        <SendIcon />
      </Stack>
    </div>
  );
};

export default Accountmanagement;
