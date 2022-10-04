import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import radicalx_icon from "../../assests/images/radicalx_logo.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';


function LoginForm() {
  /*Email */
  const [email, setEmail] = useState("");

  /* Password */
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="subContainer2">
      <div className="logo">
        <img src={radicalx_icon} alt="" />
      </div>
      <div className="form">
        <div className="title">Login</div>
        <Input disableUnderline 
        className="emailBox" 
        placeholder="Email"
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        startAdornment={
            <EmailOutlinedIcon position="start" style={{ color: "#8A8B8C", marginRight: "9px" }} />
          }
        />
        <Input disableUnderline 
        className="passwordBox"
        placeholder="Password"
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        startAdornment={
            <LockOutlinedIcon position="start" style={{ color: "#8A8B8C", marginRight: "9px" }} />
          }
        endAdornment={
            <InputAdornment position="end">
              <div
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityIcon style={{ color: "#8A8B8C", cursor: "pointer" }} /> : <VisibilityOffIcon style={{ color: "#8A8B8C", cursor: "pointer" }} />}
              </div>
            </InputAdornment>
          }
        />

        <div className="forgotPassword">
          <div className="rememberMe">
            <input id="remember_me_checkbox" type="checkbox" />
            <label htmlFor="remember_me_checkbox">Remember me</label>
          </div>
          <span className="text">Forgot password?</span>
        </div>

        <input className="loginBtn" type="submit" value="Login"></input>
      </div>
    </div>
  );
}

export default LoginForm;
