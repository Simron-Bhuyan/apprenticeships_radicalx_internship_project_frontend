import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function TeamAdmin({ name }) {
  return (
    <div className="team_admin_container">
      <div className="sub_container">
        <div className="box"></div>
        <span>{name}</span>
      </div>
      <LinkedInIcon style={{ color: "#0177B5", fontSize: "1.7rem" }} />
    </div>
  );
}

export default TeamAdmin;
