import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ImageIcon from "./icons/ImageIcon";
import Modal from "./RoleModal/Modal"


import "../../StyleSheets/form.css";

function FormContainer() {
  const [show, setShow] = useState(false);
  return (
    <div className="formContainer">
      {/* Form Header  */}
      <div className="form_header">
        <div className="back">
          <ArrowBackRoundedIcon />
          Back
        </div>
        <div className="form_header_title">Creating Apprenticeship</div>
        <div className="publish_apprenticeship_btn">
          <AddBoxOutlinedIcon />
          Publish Apprenticeship
        </div>
      </div>
      {/*Progress Indicators */}
      <div className="form_progress_indicator">
        <div className="indicator purple_color fade">
          <CheckCircleOutlineRoundedIcon className="display_none" />
          <CircleOutlinedIcon />
          Company Title & Desc.
        </div>
        <div className="indicator fade">
          <CheckCircleOutlineRoundedIcon className="display_none" />
          <CircleOutlinedIcon />
          Team Type
        </div>
        <div className="indicator fade">
          <CheckCircleOutlineRoundedIcon className="display_none" />
          <CircleOutlinedIcon />
          Team Roles
        </div>
        <div className="indicator fade">
          <CheckCircleOutlineRoundedIcon className="display_none" />
          <CircleOutlinedIcon />
          Team Admin
        </div>
        <div className="indicator fade">
          <CheckCircleOutlineRoundedIcon className="display_none" />
          <CircleOutlinedIcon />
          Timeline
        </div>
      </div>

      {/* Company Logo & Apprenticeship Title Field */}
      <div className="form">
        <div id="logo_and_title_field" className="field_container">
          <div className="field_header">
            Company Logo & Apprenticeship Title
            <ErrorOutlineRoundedIcon style={{ color: "#A6ABBB" }} />
          </div>
          <div className="form_field g-2">
            <div className="logo_field">
              <ImageIcon element_id="image_icon" />
            </div>
            <input
              className="title_field"
              type="text"
              placeholder="Enter  Apprenticeship Title"
            />
          </div>
        </div>
        {/* Company Description */}
        <div id="company_description_field" className="field_container">
          <div className="field_header">
            Company Description
            <ErrorOutlineRoundedIcon style={{ color: "#A6ABBB" }} />
          </div>
          <div className="form_field">
            <input
              className="title_field"
              type="text"
              placeholder="Enter  Apprenticeship Title"
            />
          </div>
        </div>

        {/* Apprenticeship Description */}
        <div id="company_description_field" className="field_container">
          <div className="field_header">
            Apprenticeship Description
            <ErrorOutlineRoundedIcon style={{ color: "#A6ABBB" }} />
          </div>
          <div className="form_field">
            <input
              className="title_field"
              type="text"
              placeholder="Enter  Apprenticeship Title"
            />
          </div>
        </div>

        {/* Introduction Field*/}
        <div id="company_description_field" className="field_container">
          <div className="field_header">
            Introduce yourself, your company, and what you're building.
            <ErrorOutlineRoundedIcon style={{ color: "#A6ABBB" }} />
          </div>
          <div className="form_field">
            <input
              className="file_field"
              type="file"
              placeholder="Enter  Apprenticeship Title"
            />
          </div>
        </div>

        {/* Role Field*/}
        <div id="company_description_field" className="field_role field_container">
          <div className="field_header">
            Team Roles
          </div>
          <div className="add_member">
            <button className="addTeam" onClick={() => setShow(true)}><AddCircleOutlineIcon style={{ padding: "2px" }} /><div>Add Team Member</div></button>
            <form> <Modal show={show} onClose={() => setShow(false)}>
              <div className="roleSearch">
                <PermIdentityIcon style={{ position: "relative", width: "26px", height: "26px", color: "#793EF5", margin: "16px 0 0 10px", display: "flex", flexDirection: "row", alignSelf: "flex-start" }}
                />
                <Autocomplete disablePortal

                  id="combo-box-demo"
                  sx={{
                    ' &.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  style={{
                    width: "552px", height: "48px", background: "none", position: "absolute",

                  }}
                  options={searchRoles}
                  renderInput={(params) => <TextField fullWidth

                    style={{ borderColor: "transparent", background: "none", border: "1px solid #665FEF", borderRadius: "12px", alignSelf: "stretch", position: "absolute", }}
                    placeholder="Select Role"
                    {...params} label="" />}
                />
              </div>
              <div className="roledesc">Role Description</div>
              <div className="form_field role-field">
                <textarea
                  type="text"
                  placeholder="Describe the responsibilities"
                />
              </div>
            </Modal></form>
          </div>
          <div id="role-error">
            <ErrorOutlineRoundedIcon style={{
              color: "#A6ABBB",
            }} />
          </div>

        </div>
      </div>
    </div>
  );
}
const searchRoles = ['iOS Developer', 'Android Developer', 'Full Stack Developer', 'Back-end Developer', 'Front-end Developer', ''];
export default FormContainer;

