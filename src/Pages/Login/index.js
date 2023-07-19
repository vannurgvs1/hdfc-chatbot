import React, { useState, useEffect } from "react";
import { userLogin } from "../../API";
import loanImage from "../../assets/images/loan2.jpg";
import './login.css';
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
import { useNavigate } from "react-router-dom";

const initialValue = {
    id: "",
    password: "",
    captcha: "",
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
        height: "100vh",
    },
}));

const Login = ({ setLogin }) => {
    const classes = useStyles();
    const [captcha, setCaptcha] = useState("");
    const [formValues, setFormvalues] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [counter, setCounter] = useState(30);
    const navigate = useNavigate();
    useEffect(() => {
        window.interval = setInterval(
            () => setCounter((pre) => pre - 1),
            1000
        )
        return () => {
            clearInterval(window.interval)
        }
    }, [])
    const captchaCode = () => {
        let uniqueChar = "";

        const randomChar =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        // Generate captcha for length of
        // 5 with random character
        for (let i = 1; i < 7; i++) {
            uniqueChar += randomChar.charAt(
                Math.random() * randomChar.length)
        }
        setCaptcha(uniqueChar);
    }
    useEffect(() => {
        captchaCode();
    }, []);
    if (counter <= 0) {
        captchaCode();
        clearInterval(window.interval)
        setCounter(30)
        window.interval = setInterval(
            () => setCounter((pre) => pre - 1),
            1000
        )
        return () => {
            clearInterval(window.interval)
        }
    }
    const validate = (values) => {
        let error = {};
        if (!values.id) {
            error.id = "Id is required";
        }
        if (!values.password) {
            error.password = "Password is required";
        }
        if (values.captcha !== captcha) {
            error.captcha = "Captcha mismatched";
        }
        return error;
    };

    const loginHandler = (e) => {
        e.preventDefault();
        let error = validate(formValues);
        console.log("from validate function", error, Boolean(error));
        setErrors(error);
        userLogin(formValues)
            .then((resp) => {
                if (Object.keys(error).length === 0) {
                    navigate("/dashboard/account")
                    setLogin(true);
                }
            })
            .catch((error) => console.log(error.response));
    };


    const changeHandler = (e) => {
        setFormvalues({ ...formValues, [e.target.name]: e.target.value });
    };

    return (
        <div className="loginMain">
            <div className="load-ad"><img src={loanImage} alt="loan"></img>
            </div>
            <div className={classes.boxStyle}>

                <Typography component="h3" variant="h6" className="login-head">
                    Login
                </Typography>
                <Paper className={classes.root}>

                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item sm={5}>
                            <InputLabel>Login ID</InputLabel>
                        </Grid>
                        <Grid item sm={5}>
                            <TextField
                                fullWidth
                                label=""
                                name="id"
                                type="text"
                                variant="outlined"
                                size="small"
                                autoComplete="off"
                                value={formValues.id}
                                onChange={changeHandler}
                                helperText={errors.id && errors.id}
                                error={errors.id}
                            />
                        </Grid>
                        <Grid item sm={5}>
                            <InputLabel>Password</InputLabel>
                        </Grid>
                        <Grid item sm={5}>
                            <TextField
                                fullWidth
                                type="password"
                                label=""
                                autoComplete="off"
                                name="password"
                                variant="outlined"
                                size="small"
                                value={formValues.password}
                                error={errors.password}
                                helperText={errors.password && errors.password}
                                onChange={changeHandler}
                            />
                        </Grid>
                        <Grid item sm={5}>
                            <InputLabel>
                                Captcha{" "}
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        color: "red",
                                        border: "1px solid black",
                                        padding: "4px",
                                    }}
                                >
                                    {captcha}
                                </span>
                            </InputLabel>
                        </Grid>
                        <Grid item sm={5}>
                            <TextField
                                fullWidth
                                type="text"
                                label=""
                                name="captcha"
                                variant="outlined"
                                size="small"
                                value={formValues.captcha}
                                onChange={changeHandler}
                                error={errors.captcha}
                                helperText={errors.captcha && errors.captcha}
                            />
                        </Grid>
                        <Grid sm={10} style={{ marginLeft: "70px" }}>
                            {`Captcha will change after : ${counter} second`}
                        </Grid>
                        <Grid item sm={3} style={{ marginLeft: "110px" }}>
                            <Button
                                onClick={loginHandler}
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="small"
                            >
                                login
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default Login;
