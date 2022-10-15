import React from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function TeamType({ TeamTypeIcon, title }) {
  return (
    <div className="team_type_container">
      <div className="team_type_header">
        {" "}
        {/* <TeamTypeIcon /> */}
        <CircleOutlinedIcon
          style={{
            color: "#292D32",
            opacity: 0.3,
          }}
        />
      </div>
      <div className="team_type_title"> {title} </div>
    </div>
  );
}

export default TeamType;
