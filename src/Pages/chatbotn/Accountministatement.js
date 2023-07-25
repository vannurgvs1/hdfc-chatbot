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
import Stack from "@mui/material/Stack";
import "./Accountministatement.css";

const initialValue = {
  custId: "",
  Enterotp: "",
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

const Accountministatement = ({ setLogin, setCustomerLogin }) => {
  const classes = useStyles();
  const [formValues, setFormvalues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  let captcha;
  const navigate = useNavigate();

  const validateUserId = (custId) => {
    const re = /^[0-9]{5,10}$/;
    return re.test(custId);
  };

  const validate = (values) => {
    let error = {};
    if (values.custId === "" || values.captcha === "") {
      error.custId = "*** Please fill up the field ***";
    } else {
      if (!validateUserId(values.custId)) {
        error.custId = "*** Invalid customer Id entered ***";
      }
      if (formValues.captcha != formValues.temCaptcha) {
        error.custId = "*** Invalid Captcha code entered ***";
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
      axios
        .post(
          API,
          { custId: formValues.custId },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("response", res.data);
          localStorage.setItem("token", res.data.token);
          //setLogin(true);
          // setCustomerLogin(true);
          //navigate("/leadhomepage");
        })
        .catch((err) => {
          console.log(err.response.data);
          setErrors({
            custId: err.response.data,
          });
        });
    }
  };

  const changeHandler = (e) => {
    setErrors({});
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   captcha = generate();
  //   console.log("login Page");
  //   setFormvalues({ ...formValues, temCaptcha: captcha });
  // }, []);
  return (
    <div className="acwrapper">
      <Box>
        <div className="login-border">
          <Paper_Core className="cl-grid" width={380} padding={1.5}>
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
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                alignItems="center"
                style={{ marginTop: 10 }}
              >
                <Grid item sm={3}>
                  <InputLabel className="cl-label">
                    Select Acc Number
                  </InputLabel>
                </Grid>
                <Grid item sm={5}>
                  <TextField
                    color="warning"
                    fullWidth
                    type="text"
                    name="Enterotp"
                    variant="outlined"
                    size="normal"
                    value={formValues.Enterotp}
                    error={errors.Enterotp}
                    onChange={changeHandler}
                    maxLength={17}
                    minLength={7}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" spacing={2}>
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
                      onClick={() => console.log("cancel")}
                      type="cancel"
                      variant="contained"
                      color="primary"
                      size="small"
                      title="CANCEL"
                    />
                  </Stack>
                </Grid>
              </Grid>

              {errors.custId && <p className="err-field"> {errors.custId}</p>}

              {errors.captcha && <p className="err-field"> {errors.captcha}</p>}
            </Grid>
          </Paper_Core>
        </div>
      </Box>
    </div>
  );
};

export default Accountministatement;
