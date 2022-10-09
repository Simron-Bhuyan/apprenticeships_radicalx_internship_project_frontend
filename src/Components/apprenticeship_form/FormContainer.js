import React, { useState } from "react";
import Button from "@mui/material/Button"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ImageIcon from "./icons/ImageIcon";
import Modal from "./RoleModal/Modal"
import ReqSkills from "./MultiSelect/ReqSkills";


import "../../StyleSheets/form.css";

function FormContainer() {


  const [show, setShow] = useState(false);
  const [skill, setSkill] = useState(false);
  const [compskill, setCompskill] = useState(false);


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
                      border: 'none'
                      ,
                    },
                  }}
                  style={{
                    width: "552px", height: "48px", background: "none", position: "absolute",

                  }}
                  options={searchRoles}
                  renderInput={(params) => <TextField fullWidth

                    style={{ borderColor: "transparent", background: "none", border: "1px solid #665FEF", borderRadius: "12px", alignSelf: "stretch", position: "absolute", caretColor: "transparent", paddingLeft: "45px" }}
                    placeholder="Select Role"
                    {...params} label="" />}
                />
              </div>
              {/*===========================Role Description================================ */}
              <div className="roledesc">Role Description</div>
              <div className="form_field role-field">
                <textarea
                  type="text"
                  placeholder="Describe the responsibilities"
                />
              </div>

              {/*====================Required Skills========================== */}
              <div className="roledesc req-skills">Required Skills (Select any 3)</div>
              <div>
                <Button className="Skills-select field_header" onClick={() => { setSkill(skill => !skill) }}>
                  <WorkspacePremiumOutlinedIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-start", margin: "0.5rem" }}
                  />

                  <div className="skills-text">Select Skills</div>
                  <ArrowDropDownIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-end", margin: "0.5rem" }} />
                </Button>
                {skill ? <div>
                  <ReqSkills />
                </div> : <div>
                </div>}
              </div>
              {/*===========================Complementary Skills======================== */}
              <div className="roledesc req-skills">Complementary Skills (Select any 3)</div>
              <div className="Skills-select field_header" onClick={() => { setCompskill(compskill => !compskill) }}>
                <StarBorderIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-start", margin: "0.5rem" }}
                />
                <input className="skills-text" />
                <ArrowDropDownIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-end", margin: "0.5rem" }} />
              </div>
              {/*===========================Minimum hours========================= */}
              <div className="roledesc req-skills">Minimum Hours Per Week</div>
              <div className="Skills-select " >
                <QueryBuilderIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-start", margin: "0.5rem" }}
                />
                <input type="number" disablePortal />
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
const searchRoles = [];
const languages = ['Swift', 'Java', 'Python', 'JavaScript', 'Reactjs'];
export default FormContainer;

