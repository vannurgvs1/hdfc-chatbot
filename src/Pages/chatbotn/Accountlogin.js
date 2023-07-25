import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  Button,
  Box,
  InputLabel,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { generate } from "../../utils/generator";
import Paper_Core from "../ui_core/Paper_Core";
import Button_Core from "../ui_core/Button_Core";
import Input_Core from "../ui_core/Input_Core";
import { FaUserAlt, FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Stack, MenuItem, Select } from "@mui/material";
import "./Accountlogin.css";
import SendIcon from "@mui/icons-material/Send";

const initialValue = {
  custId: "",
  captcha: "",
  temCaptcha: "",
  otp: "",
  defaultOtp: "123456",
  defaultAccNumb: "987654321",
  accNum: { id: "", acNumb: "" },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
    padding: "10px",
  },
  boxStyle: {
    flexDirection: "column",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "93vh",
  },
}));

const Accountlogin = ({
  setLogin,
  setCustomerLogin,
  setShowLogin,
  _backToMenu,
}) => {
  const classes = useStyles();
  const [formValues, setFormvalues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [showCaptcha, setShowCaptcha] = useState(true);
  const [showPhoneMsg, setShowPhoneMsg] = useState(true);
  const [showAccNum, setShowAccNum] = useState(false);
  const [successfulMsg, setSuccessfulMsg] = useState(false);
  const [accNumList, setAccNumList] = useState([
    { id: 1, acNumb: "987654321" },
    { id: 2, acNumb: "879654321" },
  ]);
  let captcha;
  const navigate = useNavigate();

  const validateUserId = (custId) => {
    const re = /^[0-9]{5,10}$/;
    return re.test(custId);
  };

  const validate = (values) => {
    console.log(values, 58, formValues);
    let error = {};
    if (values.custId === "" || values.captcha === "") {
      error.err = "*** Please fill up the field ***";
    } else {
      if (!validateUserId(values.custId)) {
        error.err = "*** Invalid customer Id entered ***";
      }
      if (formValues.captcha !== formValues.temCaptcha) {
        error.err = "*** Invalid Captcha code entered ***";
      }
      if (showCaptcha == false) {
        if (formValues.otp === "") {
          error.err = "*** Please fill up the OTP field ***";
        } else {
          if (formValues.otp !== formValues.defaultOtp) {
            error.err = "*** Invalid OTP entered ***";
          } else if (formValues.otp === formValues.defaultOtp) {
            setShowPhoneMsg(false);
            setShowAccNum(true);
            if (
              Number(formValues.accNum.acNumb) ===
              Number(formValues.defaultAccNumb)
            ) {
              setSuccessfulMsg(true);
            } else if (
              Number(formValues.accNum.acNumb) !==
              Number(formValues.defaultAccNumb)
            ) {
              setSuccessfulMsg(false);
              error.err = "*** Invalid Account Number Selected ***";
            } else {
              setSuccessfulMsg(false);
            }
          }
        }
      }
    }
    return error;
  };
  const API = "http://localhost:8085/api/v1/user/login";
  const loginHandler = (e) => {
    e.preventDefault();
    let error = validate(formValues);
    setErrors(error);
    if (Object.keys(error).length === 0) {
      setShowCaptcha(false);

      // axios
      //   .post(
      //     API,
      //     { custId: formValues.custId },
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     console.log("response", res.data);
      //     localStorage.setItem("token", res.data.token);
      //     //setLogin(true);
      //     // setCustomerLogin(true);
      //     //navigate("/leadhomepage");
      //   })
      //   .catch((err) => {
      //     console.log(err.response.data);
      //     setErrors({
      //       custId: err.response.data,
      //     });
      //   });
    }
  };

  const changeHandler = (e) => {
    setErrors({});
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    captcha = generate();
    console.log("login Page");
    setFormvalues({ ...formValues, temCaptcha: captcha });
  }, []);

  const _resetForm = () => {
    _backToMenu();
    setFormvalues(initialValue);
    setErrors({});
    setShowCaptcha(true);
    setShowPhoneMsg(true);
    setShowAccNum(false);
    setSuccessfulMsg(false);
  };

  return (
    <div className="ac-wrapper">
      <Box>
        <div className="loginborder">
          <Paper_Core className="cl-grid" width={"94%"} padding={1.5}>
            <Grid container>
              <Typography component="p" variant="p" className="login-head">
                Please Login to Continue
              </Typography>
            </Grid>
            <Grid>
              <Grid
                container
                spacing={2}
                alignItems="center"
                style={{ marginTop: 10 }}
              >
                <Grid item sm={3}>
                  <InputLabel className="cl-label">Customer ID</InputLabel>
                </Grid>
                <Grid item sm={5}>
                  {!showAccNum ? (
                    <Input_Core
                      fullWidth
                      name="custId"
                      type="number"
                      variant="outlined"
                      size="small"
                      value={formValues.custId}
                      onChange={changeHandler}
                      autoComplete="off"
                      list="autocompleteOff"
                    />
                  ) : (
                    <p className="custValue">{formValues?.custId}</p>
                  )}
                </Grid>
              </Grid>
              {showCaptcha ? (
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{ marginTop: 10 }}
                >
                  <Grid item sm={3}>
                    <InputLabel className="cl-label">Captcha Code</InputLabel>
                  </Grid>
                  <Grid item sm={5}>
                    <TextField
                      color="warning"
                      fullWidth
                      type="text"
                      name="captcha"
                      variant="outlined"
                      size="normal"
                      value={formValues.captcha}
                      error={errors.captcha}
                      onChange={changeHandler}
                      maxLength={17}
                      minLength={7}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <Box sx={{ backgroundColor: "#fff", padding: 10 }}>
                      <h5
                        style={{
                          color: "#91",
                          fontSize: "13px",
                          letterSpacing: 3,
                          fontFamily: "serif",
                          margin: 0,
                          lineHeight: "8px",
                          textAlign: "center",
                        }}
                      >
                        {formValues.temCaptcha}
                      </h5>
                    </Box>
                  </Grid>
                </Grid>
              ) : !showAccNum ? (
                <>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    style={{ marginTop: 10 }}
                  >
                    <Grid item sm={3}>
                      <InputLabel className="cl-label">Enter OTP</InputLabel>
                    </Grid>
                    <Grid item sm={5}>
                      <TextField
                        color="warning"
                        fullWidth
                        type="number"
                        name="otp"
                        variant="outlined"
                        size="normal"
                        value={formValues.otp}
                        error={errors.otp}
                        onChange={changeHandler}
                        maxLength={17}
                        minLength={7}
                      />
                    </Grid>
                    <Grid item sm={4}>
                      <div className="link">
                        <a href="#" style={{ fontSize: "12px" }}>
                          Resend OTP
                        </a>
                      </div>
                    </Grid>
                  </Grid>
                  {showPhoneMsg && (
                    <Grid>
                      <div className="otpline">
                        <p>OTP sent to registered Mobile No ******601</p>
                      </div>
                    </Grid>
                  )}
                </>
              ) : (
                <>
                  {!successfulMsg ? (
                    <Grid
                      container
                      spacing={2}
                      alignItems="center"
                      style={{ marginTop: 10 }}
                    >
                      <Grid item sm={4}>
                        <InputLabel className="cl-label">
                          Select Acc Number
                        </InputLabel>
                      </Grid>
                      <Grid item sm={5}>
                        <Select
                          fullWidth
                          name="accNum"
                          id="select"
                          onChange={changeHandler}
                        >
                          {(accNumList || []).map((item, index) => {
                            return (
                              <MenuItem value={item} id={index}>
                                {item?.acNumb}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid>
                      <div className="otpSucc otpline">
                        <p>
                          ~Balance details sent to your registered Mobile No
                          ******601~
                        </p>
                      </div>
                    </Grid>
                  )}
                </>
              )}
              <Grid container justifyContent="center" spacing={2}>
                
                {!successfulMsg ? (
                  <Grid item sm={3}>
                    <Stack
                      direction="row"
                      spacing={4}
                      sx={{ marginTop: "6px", marginBottom: "3px" }}
                    >
                      <Button_Core
                        onClick={loginHandler}
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="small"
                        title="SUBMIT"
                      />
                      <Button_Core
                        onClick={() => setShowLogin(true)}
                        type="cancel"
                        variant="contained"
                        color="primary"
                        size="small"
                        title="CANCEL"
                      />
                    </Stack>                    
                </Grid>
                  ) : (<>
                    <div style={{width:"82%"}}>
                      <button onClick={_resetForm} className="backmenu bc-menu">
                        Back To Menu
                      </button>
                    </div>
                    
            <Stack
            direction="row"
            spacing={1}
            sx={{ marginTop: "6px", marginBottom: "3px", width: "82%" }}
          >
            <input
              type="text"
              placeholder="text here"
              style={{ width: "100%", minHeight: "20px" }}
            />
            <SendIcon />
          </Stack>
        </>
              
                  )}
              </Grid>
              {errors.err && <p className="err-field"> {errors.err}</p>}
            </Grid>
          </Paper_Core>
        </div>
      </Box>
    </div>
  );
};

export default Accountlogin;
