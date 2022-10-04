import React from "react";
import radicalx_icon from "../../assests/images/radicalx_logo.png";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

function HomeNav() {
  return (
    <aside className="sideNavContainer">
      <div className="subContainer">
        <div className="home_logo">
          <img src={radicalx_icon} alt="" />
        </div>
        <div className="navListContainer">
          <li className="nav_list">
            <div className="icon">
              <DashboardOutlinedIcon />
            </div>
            <div className="nav_list_title">Dashboard</div>
          </li>
          <li className="nav_list">
            <div className="icon">
              <WorkspacePremiumOutlinedIcon />
            </div>
            <div className="nav_list_title">Apprenticeships</div>
          </li>
          {/* <li>
          <div className="icon"></div>
          <div className="nav_list">Internships</div>
        </li>
        <li>
          <div className="icon"></div>
          <div className="nav_list">Jobs</div>
        </li> */}
          <li className="nav_list">
            <div className="icon">
              <SettingsOutlinedIcon />
            </div>
            <div className="nav_list_title">Settings</div>
          </li>
        </div>
      </div>

      <div className="userInfo">
        <div className="rectangle"></div>
        <div className="username">Adam Scott</div>
      </div>
    </aside>
  );
}

export default HomeNav;
