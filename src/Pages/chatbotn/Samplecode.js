import React, { useState } from "react";
import {
  Box,
  Toolbar,
  AppBar,
  IconButton,
  Tab,
  Tabs,
  Paper,
  Grid,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import "./Samplecode.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import logo from "../../Assets/logo.png";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import bankDetails from "../../utils/test.json";

const initialFormData = {
  accountName: "ranjith",
  accountNumber: "123456789",
  nickname: "rock",
  addressLine1: "bnglr",
  addressLine2: "hyderbad",
  city: "bangalore",
  swift_code: "",
  bank_name: "",
  country: "",
  iban: "",
};

export default function ForexMgnHomePage() {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const API_ENDPOINT = "http://localhost:3333/customerId/123456";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData, 33);
      axios.get(API_ENDPOINT, formData).then((response) => {
        console.log("Form submitted successfully!", response.data);
        setFormData({
          accountName: "",
          accountNumber: "",
          nickname: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          swift_code: "",
          bank_name: "",
          country: "",
          iban: "",
        });
      });
    }
  };

  const validateForm = () => {
    // Perform validation here
    const errors = {};

    if (!formData.accountName) {
      errors.accountName = "Account Name is required";
    }

    if (!formData.accountNumber) {
      errors.accountNumber = "Account Number is required";
    }

    if (!formData.nickname) {
      errors.nickname = "Nickname is required";
    }

    if (!formData.addressLine1) {
      errors.addressLine1 = "Address Line 1 is required";
    }

    if (!formData.city) {
      errors.city = "City is required";
    }

    if (!formData.swift_code) {
      errors.swift_code = "Swift Code is required";
    }

    if (!formData.bank_name) {
      errors.bank_name = "Bank Name is required";
    }

    if (!formData.country) {
      errors.country = "Country is required";
    }

    if (!formData.iban) {
      errors.iban = "IBAN is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({});
    console.log(name, value, 52, e);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});
  const fetchBankDetail = () => {
    console.log("swift code -----", formData.swift_code);
    let bankDetail = bankDetails.filter(
      (data) => data["Swift Code"] === formData.swift_code
    );
    console.log("found bank detail ----", bankDetail);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <img src={logo} style={{ width: "20%" }} alt="logo" />
          <div className="profile">
            <IconButton
              size="small"
              edge="start"
              color="secondary"
              sx={{ mr: 2 }}
            >
              Tony Mark
            </IconButton>

            <IconButton
              size="small"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              Profile
            </IconButton>
            <IconButton
              size="small"
              color="inherit"
              edge="start"
              sx={{ mr: 2 }}
            >
              <AccountCircle />
            </IconButton>
            <IconButton size="small" color="inherit">
              <ArrowDownwardIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Paper
        variant="outlined"
        square
        style={{
          position: "absolute",
          left: 80,
          width: "94vw",
          height: "3.8vw",
        }}
      >
        <div className="tabBar">
          <Tabs variant="fullWidth">
            <div className="tabIcon">
              <Drawer
                variant="permanent"
                open="true"
                PaperProps={{
                  sx: {
                    height: {
                      top: 64,
                    },
                  },
                }}
              >
                <Tab label="Welcome Tony" />
                <Divider />
                <Tab label="Account Statement" />
                <Tab label="Cheque Services" />
                <Tab label="Funds Transfer" />
                <Tab label="Book FD " />
                <Tab label="Manage Card" />
              </Drawer>
            </div>

            <Tab label="Accounts" />

            <Link to="/Accounts" style={{ padding: "1.5rem" }}>
              <ArrowDownwardIcon />
            </Link>
            <Tab label="Deposits" />
            <Tab label="Loans" />
            <Tab label="Credit Cards" />
            <Tab label="Other Services" />
          </Tabs>
        </div>

        <div className="head">
          <span>Home-{">"}</span>
          <span>Accounts-{">"}</span>
          <span>Fund Transfer-{">"}</span>
          <span>Outward Remittance-{">"}</span>
          <span>Add New Account</span>
        </div>

        <Grid className="style">
          <Grid>
            <a href="hello">Add New Account</a>
            <Grid>Payee Details</Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md={6}>
              <Grid container>
                <Grid item md={6}>
                  Account Name:
                </Grid>

                <Grid item sm={2}>
                  <TextField
                    variant="standard"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleChange}
                    autoComplete="off"
                    error={!!errors.accountName}
                    helperText={errors.accountName}
                  />
                </Grid>

                <Grid item md={6}>
                  Account Number:
                </Grid>

                <Grid item sm={4}>
                  <TextField
                    variant="standard"
                    name="accountNumber"
                    value={formData?.accountNumber}
                    onChange={handleChange}
                    autoComplete="off"
                    error={!!errors.accountNumber}
                    helperText={errors.accountNumber}
                  />
                </Grid>

                <Grid item md={6}>
                  Nick Name
                </Grid>

                <Grid item sm={4}>
                  <TextField
                    variant="standard"
                    name="nickname"
                    value={formData?.nickname}
                    onChange={handleChange}
                    autoComplete="off"
                    error={!!errors.nickname}
                    helperText={errors.nickname}
                  />
                </Grid>

                <Grid item md={6}>
                  Address Line1:
                </Grid>

                <Grid item sm={4}>
                  <TextField
                    variant="standard"
                    name="addressLine1"
                    value={formData?.addressLine1}
                    onChange={handleChange}
                    autoComplete="off"
                    error={!!errors.addressLine1}
                    helperText={errors.addressLine1}
                  />
                </Grid>

                <Grid item md={6}>
                  Address Line1:
                </Grid>

                <Grid item sm={4}>
                  <TextField
                    variant="standard"
                    name="addressLine1"
                    value={formData?.addressLine1}
                    onChange={handleChange}
                    autoComplete="off"
                    error={!!errors.addressLine1}
                    helperText={errors.addressLine1}
                  />
                </Grid>

                <div className="city">City:</div>
                <div className="city1">
                  <Grid>
                    <TextField
                      variant="standard"
                      onChange={handleChange}
                      name="city"
                      value={formData?.city}
                      error={!!errors.city}
                      helperText={errors.city}
                      autoComplete="off"
                    />
                  </Grid>
                </div>

                <Grid item md={6}>
                  Swift code
                </Grid>

                <Grid item sm={3}>
                  <TextField
                    variant="standard"
                    name="swift_code"
                    value={formData?.swift_code}
                    onChange={handleChange}
                    autoComplete="off"
                    error={!!errors.swift_code}
                    helperText={errors.swift_code}
                  />
                </Grid>
                <div className="link">
                  <a href="#" onClick={fetchBankDetail}>
                    Find bank details
                  </a>
                </div>
                <Grid>PayeeBankDetails</Grid>

                <Grid className="detail">Bank Name:</Grid>

                <Grid className="icon">
                  <TextField
                    variant="standard"
                    onChange={handleChange}
                    name="bank_name"
                    value={formData?.bank_name}
                    autoComplete="off"
                    error={!!errors.bank_name}
                    helperText={errors.bank_name}
                  />
                </Grid>

                <Grid className="country">Country:</Grid>

                <Grid className="country1">
                  <TextField
                    variant="standard"
                    onChange={handleChange}
                    name="country"
                    value={formData?.country}
                    autoComplete="off"
                    error={!!errors.country}
                    helperText={errors.country}
                  />
                </Grid>

                <Grid item sm={6}>
                  IBAN:
                </Grid>

                <Grid>
                  <TextField
                    variant="standard"
                    name="iban"
                    value={formData?.iban}
                    onChange={handleChange}
                    autoComplete="off"
                    error={!!errors.iban}
                    helperText={errors.iban}
                  />
                </Grid>

                <div className="optional">(optional)</div>

                <div className="paraline">
                  Please Note: *The Transaction can be initiated at any time in
                  a week
                </div>
                <span className="para1">
                  *Transaction Processed after IST 3:00 pm will be Processed on
                  Next Working Day{" "}
                </span>

                <FormGroup className="box">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label=" I have read and accept the Terms & Conditions "
                  />
                </FormGroup>

                <div className="sub">
                  <button variant="contained" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
