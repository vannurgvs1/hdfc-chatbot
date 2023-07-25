import React, { useEffect, useState } from "react";
import "./Accountpage.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import Accountlogin from "./Accountlogin";
import closeIcon from '../../assets/images/close.png';

const bankMenu = [
  {
    id: 1,
    name: "Account Management",
    submenu: [
      { id: 1, name: "Account Balance" },
      { id: 2, name: "Mini Statement" },
      { id: 3, name: "Cheque Services" },
      { id: 4, name: "Download Stmt" },
      { id: 5, name: "Stop Payment" },
      { id: 6, name: "Debit Card Hostlisting" },
      { id: 7, name: "Order Chq Book" },
      { id: 8, name: "Open SB Account" },
    ],
  },
  {
    id: 2,
    name: "Loan Eligibility",
    submenu: [],
  },
  {
    id: 3,
    name: "Mutual Funds",
    submenu: [],
  },
  {
    id: 4,
    name: "Demat Services",
    submenu: [],
  },
  {
    id: 5,
    name: "Credit Cards",
    submenu: [],
  },
  {
    id: 6,
    name: "Loan Services",
    submenu: [],
  },
  {
    id: 7,
    name: "Deposits",
    submenu: [],
  },
  {
    id: 8,
    name: "ATM /Branch Locator",
    submenu: [],
  },
  {
    id: 9,
    name: "Generate MPin",
    submenu: [],
  },
  {
    id: 10,
    name: "Investments",
    submenu: [],
  },
  {
    id: 11,
    name: "Contact Us",
    submenu: [],
  },
];
const Accountpage = (props) => {
  const Navigate = useNavigate();
  const [menuHeading, setMenuHeading] = useState({});
  const [menuFields, setMenuFields] = useState({});
  const [showLogin, setShowLogin] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  // console.log(bankMenu, 73)
  const [login, setLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const getAccountlogin = () => {
    // Navigate("/accountlogin");

    setLoginStatus(true);
    setShowLogin(false);
  };
  const updateField = (row) => {
    console.log(row, 76);
    setMenuHeading({});
    setMenuFields({ ...menuFields, ...row });
  };

  const _backToMenu = () => {
    console.log('_baktoMenu');
    setLogin(true);
  };
  const closeDialog = () => {
    // document.body.classList.remove("body");
    document.getElementById("chat-bot").style.display = "none";
    // props.closeDialog(false);
    setOpen(false);
}

  useEffect(() => {
    console.log(menuFields.name, 81);
  }, [menuFields]);

  return (
    <div
      className="heading helpBox-wrapper" id="chat-bot"
      style={{ width: showLogin ? "30%" : "30%" }}
    >
      <div className="head_box">
        <p>
          Hi, I am <span>Hawk</span> your Guide to Quick Services
        </p>
        <p className='close-icon'>
          <img src={closeIcon} width="30" height="30" onClick={closeDialog} className="close-icon"></img>
        </p>
       
      </div>
      
        <div className="head_wrap">
        {showLogin ? (
          <>
            <div className="style">
              <div className="btn-wrapper">
                {bankMenu.map((item, index) => {
                  return (
                    <button
                      className={`help-btn ${menuFields?.name == item?.name && "active"
                        }`}
                      key={index}
                      onClick={() => updateField(item)}
                    >
                      {item?.id}. {item?.name}
                    </button>
                  );
                })}
              </div>
              {menuFields?.name !== undefined && (
                <>
                  <div>
                    <button className="button">
                      {menuFields?.id}. {menuFields?.name}
                    </button>
                  </div>
                  <div className="paraline">
                    <p> {menuFields?.name}</p>
                  </div>
                  <div>
                    <div>
                      {menuFields.submenu.map((item, index) => {
                        return (
                          <button
                            className="btn-tag"
                            onClick={() => setMenuHeading(item)}
                            key={index}
                          >
                            {item?.id}. {item?.name}
                          </button>
                        );
                      })}
                    </div>
                    {menuHeading.name !== undefined && (
                      <div>
                        <button className="Accountbalance">
                          {menuHeading?.id}. {menuHeading?.name}
                        </button>
                        <div className="login-page">
                          <p>Please Login To Check Balance</p>
                          <button
                            className="button-Lg"
                            onClick={getAccountlogin}
                          >
                            LOGIN
                          </button>
                        </div>
                      </div>
                    )}

                    {/* <div className="login-page">
                      <p>Please Login To Check Balance</p>
                      <button onClick={getAccountlogin}>LOGIN</button>
                    </div> */}
                  </div>
                  <div>
                    <button onClick={_backToMenu} className="backmenu">Back To Menu</button>
                  </div>
                </>
              )}
            </div>
            <Stack
              direction="row"
              spacing={1}
              sx={{ marginTop: "6px", marginBottom: "3px" }}
            >
              <input
                type="text"
                placeholder="text here"
                style={{ width: "100%", minHeight: "20px" }}
              />
              <SendIcon />
            </Stack>
          </>
        ) : (
          <Accountlogin setShowLogin={setShowLogin} _backToMenu={_backToMenu} />
        )}
      </div>
    </div>
  );
};

export default Accountpage;
