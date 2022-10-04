import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import radicalx_icon from "../../assests/images/radicalx_logo.png";

function LoginForm() {
  return (
    <div className="subContainer2">
      <div className="logo">
        <img src={radicalx_icon} alt="" />
      </div>

      <div className="form">
        <div className="title">Login</div>
        <div className="emailBox">
          <EmailOutlinedIcon style={{ color: "#8A8B8C" }} />
          <input type="email" placeholder="Email" />
        </div>

        <div className="passwordBox">
          <LockOutlinedIcon style={{ color: "#8A8B8C" }} />
          <input type="password" placeholder="Password" />
          <VisibilityOutlinedIcon style={{ color: "#8A8B8C" }} />
        </div>

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
