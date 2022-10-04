import React from "react";
import "../../../StyleSheets/apprenticeship_card.css";
import EditIcon from "../icons/EditIcon";
import CopyIcon from "../icons/CopyIcon";
import DeleteIcon from "../icons/DeleteIcon";
import RoleCard from "../roles/RoleCard";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function ApprenticeshipCard({ title }) {
  return (
    <div className="card">
      <div className="card_header">
        <div className="apprenticeship_title">{title}</div>
        <div className="crud_icons">
          <EditIcon />
          <CopyIcon />
          {/* <DeleteOutlineOutlinedIcon style={{ color: "#8f8f8f" }} /> */}
          <DeleteIcon />
        </div>
      </div>

      <div className="card_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magaliqua.
      </div>

      <div className="card_roles">
        <RoleCard title="Product Manager" />
        <RoleCard title="Product Designer" />
        <RoleCard title="Backend Developer" />
        <RoleCard title="Frontend Developer" />
      </div>
    </div>
  );
}

export default ApprenticeshipCard;
