import React, { useState,useRef } from "react";
import Button from "@mui/material/Button";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import ImageIcon from "./icons/ImageIcon";
import Modal from "./Modals/Modal";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ReqSkills from "./MultiSelect/ReqSkills";
import Location from "./Location/Location"
import {
  body,
  filenameDisplayer,
  elementToAppend,
} from "../../index_DOM_Fetcher.js";
import TeamType from "./TeamType";
import TeamAdmin from "./TeamAdmin";
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Input from "@mui/material/Input";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../../StyleSheets/form.css";
import LinkIcon from "./icons/LinkIcon";
import ComplementarySkills from "./MultiSelect/ComplementarySkills";


function FormContainer() {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [skill, setSkill] = useState(false);
  const [compskill, setCompskill] = useState(false);
  const [selectedDate, handleDateChange] = useState(null);
  const [email, setEmail] = useState("");
  const fileInputRef = useRef(null);
  const freezeBody = () => {
    body.style.overflow = "hidden";
  };

  const textareaHeightHandler = (event) => {
    console.log(event.currentTarget.scrollHeight);
    let scrollHeight = event.currentTarget.scrollHeight;

    event.currentTarget.style.height = `${scrollHeight}px`;
  };
  const videoFileFieldHandler = (event) => {
    console.log(fileInputRef);
    let filename = event.target.files[0].name;
    elementToAppend.innerHTML = filename;
    filenameDisplayer.prepend(elementToAppend);
    filenameDisplayer.classList.remove("display_none");
  };

  const deleteFileName = (event) => {
    filenameDisplayer.classList.add("display_none");
    fileInputRef.current.value = "";
    console.log(fileInputRef);
  };
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

      <div className="form">
        {/* Company Logo & Apprenticeship Title Field */}
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
              placeholder="Enter Apprenticeship Title"
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
            <textarea
              className="title_field"
              name=""
              id=""
              rows="1"
              placeholder="Enter description"
              onKeyUp={textareaHeightHandler}
            ></textarea>
          </div>
        </div>

        {/* Apprenticeship Description */}
        <div id="apprenticeship_description_field" className="field_container">
          <div className="field_header">
            Apprenticeship Description
            <ErrorOutlineRoundedIcon style={{ color: "#A6ABBB" }} />
          </div>
          <div className="form_field">
            <textarea
              className="title_field"
              name=""
              id=""
              rows="1"
              placeholder="Enter description"
              onKeyUp={textareaHeightHandler}
            ></textarea>
          </div>
        </div>

        {/* Introduction Field*/}
        <div id="introduction_field" className="field_container">
          <div className="field_header">
            Introduce yourself, your company, and what you're building.
            <ErrorOutlineRoundedIcon style={{ color: "#A6ABBB" }} />
          </div>
          <div className="form_field">
            <label htmlFor="video_file">
              Drag & drop to upload your video
              <UploadFileRoundedIcon style={{ fontSize: 20 }} />
            </label>
            <input
            ref={fileInputRef}
              className="file_field"
              type="file"
              name="video_file"
              id="video_file"
              accept="video/*"
              onChange={videoFileFieldHandler}
              />
            </div>
  
            <div id="filenameDisplayer" className="display_none">
              <CloseRoundedIcon
                onClick={deleteFileName}
                style={{ color: "#793EF5", cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Team Types */}
        <div id="team_type_field" className="field_container">
          <div className="field_header">
            Team Type <ErrorOutlineRoundedIcon style={{ color: "#A6ABBB" }} />
          </div>
          <div className="form_field">
            <TeamType title="Web Platform" />
            <TeamType title="Mobile App" />
            <TeamType title="Growth" />
            <TeamType title="Marketing Website" />
            <TeamType title="Prototyping" />
            <TeamType title="Data" />
            <TeamType title="Custom Team" />
          </div>
        </div>

        {/* Role Field*/}
        <div id="role_field" className="field_role field_container">
          <div className="field_header">
            <div className="header_content">
              Team Roles
              <div className="add_member">
                <button
                  className="addTeam"
                  onClick={() => {
                    setShowRoleModal(true);
                    freezeBody();
                  }}
                >
                  <AddCircleOutlineIcon style={{ padding: "2px" }} />
                  <div style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Add Team Member
                  </div>
                </button>
                <form >
                  <Modal
                    form_title="Add Role"
                    show={showRoleModal}
                    onClose={() => setShowRoleModal(false)}
                  >
                    <div className="roleSearch">
                      <PermIdentityIcon
                        style={{
                          position: "relative",
                          width: "26px",
                          height: "26px",
                          color: "#793EF5",
                          margin: "6px 0 6px 10px",
                          display: "flex",
                          flexDirection: "row",
                          alignSelf: "flex-start",
                        }}
                      />
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        sx={{
                          " &.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                        }}
                        style={{
                          width: "92%",
                          height: "48px",
                          background: "none",
                          position: "absolute",
                          
                        }}
                        options={searchRoles}
                        renderInput={(params) => (
                          <TextField
                            fullWidth
                            style={{
                              borderColor: "transparent",
                              background: "none",
                              border: "1px solid #665FEF",
                              borderRadius: "12px",
                              alignSelf: "stretch",
                              position: "absolute",
                              caretColor: "transparent",
                              paddingLeft: "45px",
                            }}
                            placeholder="Select Role"
                            {...params}
                            label=""
                          />
                        )}
                      />
                    </div>
{/*==================Role Description===================== */}
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
          <div className="Skills-select field_header" onClick={() => { setSkill(skill => !skill) }}>
            <WorkspacePremiumOutlinedIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-start", margin: "0.5rem" }}
            />

            <div className="skills-text">Select Skills</div>
            <ArrowDropDownIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-end", margin: "0.5rem" }} />
          </div>  </div>
          {skill ? <div>
            <ReqSkills />
          </div> : <div>
          </div>}

        {/*===========================Complementary Skills======================== */}
        <div className="roledesc req-skills">Complementary Skills (Select any 3)</div>
        <div className="Skills-select field_header" onClick={() => { setCompskill(compskill => !compskill) }}>
          <StarBorderIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-start", margin: "0.5rem" }}
          />

          <div className="skills-text">Select Skills</div>
          <ArrowDropDownIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-end", margin: "0.5rem" }} />
        </div>
          {compskill ? <div>
            <ComplementarySkills />
          </div> : <div>
          </div>}

        {/*===========================Minimum hours========================= */}
        <div className="roledesc req-skills minHours">Minimum Hours Per Week</div>
        <div className="Skills-select " >
          <QueryBuilderIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-start", margin: "0.5rem" }}
          />
          <input placeholder="No. of hours" type="number" style={{width:"100%" ,margin:"3px"}} />
        </div>

         {/*==============Location Preferences============== */}
         <div className="roledesc req-skills minHours">Location Preferences</div>
         <div className="Skills-select field_header" >
           <LocationOnIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-start", margin: "0.5rem" }}
           />
           <div className="skills-text"><Location /></div>
          <ArrowDropDownIcon style={{ display: "flex", width: "28px", flexDirection: "row", color: "#793EF5", alignSelf: "flex-end", margin: "0.5rem" }} />
         </div>
                  </Modal>
                </form>
              </div>
            </div>
            <div id="role-error">
              <ErrorOutlineRoundedIcon
                style={{
                  color: "#A6ABBB",
                }}
              />
            </div>
          </div>
        </div>

        {/* Admin Field */}
        <div id="admin_field" className="field_role field_container">
          <div className="field_header">
            <div className="header_content">
              Team Admin
              <div className="add_member">
                <button
                  className="addTeam"
                  onClick={() => {
                    setShowAdminModal(true);
                    freezeBody();
                  }}
                >
                  <AddCircleOutlineIcon style={{ padding: "2px" }} />
                  <div style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Add Team Member
                  </div>
                </button>
                <form>
                  <Modal
                    form_title="Add Team Admin"
                    show={showAdminModal}
                    onClose={() => setShowAdminModal(false)}
                  >
                    <div className="logo_field">
                      <ImageIcon element_id="image_icon" />
                    </div>

                    <Input
                      disableUnderline
                      className="usernameBox"
                      placeholder="Name"
                      type="text"
                      onChange
                      startAdornment={
                        <PersonOutlineRoundedIcon
                          position="start"
                          style={{ color: "#793EF5", marginRight: "9px" }}
                        />
                      }
                      inputProps={{
                        style: {
                          fontFamily: "Space Grotesk,sans-serif",
                        },
                      }}
                    />
                    <Input
                      disableUnderline
                      className="emailBox"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      startAdornment={
                        <EmailOutlinedIcon
                          position="start"
                          style={{ color: "#793EF5", marginRight: "9px" }}
                        />
                      }
                      inputProps={{
                        style: {
                          fontFamily: "Space Grotesk,sans-serif",
                        },
                      }}
                    />

                    <Input
                      disableUnderline
                      className="urlBox"
                      placeholder="LinkedIn URL (optional)"
                      type="url"
                      startAdornment={<LinkIcon />}
                      inputProps={{
                        style: {
                          fontFamily: "Space Grotesk,sans-serif",
                        },
                      }}
                    />
                  </Modal>
                </form>
              </div>
            </div>
            <div id="role-error">
              <ErrorOutlineRoundedIcon
                style={{
                  color: "#A6ABBB",
                }}
              />
            </div>
          </div>

          <div className="form_field">
            <TeamAdmin name="John McKinsey" />
            <TeamAdmin name="John McKinsey" />
            <TeamAdmin name="John McKinsey" />
            <TeamAdmin name="John McKinsey" />
            <TeamAdmin name="John McKinsey" />
          </div>
        </div>

        {/* Timeline Field  */}
        <div id="timeline_field" className="field_container">
          <div className="field_header">
            Timeline <ErrorOutlineRoundedIcon style={{ color: "#A6ABBB" }} />
          </div>
          <div className="form_field">
            <div className="start_date">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  clearable
                  placeholder="Start Date"
                  value={selectedDate}
                  onChange={(date) => handleDateChange(date)}
                  format="dd/MM/yyyy"
                  inputProps={{
                    style: {
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "1rem",
                      fontWeight: "600",
                    },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "0.75rem",
                    },
                  }}
                  KeyboardButtonProps={{
                    style: {
                      color: "#793EF5",
                    },
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="estimated_end_date">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  clearable
                  placeholder="Estimated End Date"
                  value={selectedDate}
                  onChange={(date) => handleDateChange(date)}
                  format="dd/MM/yyyy"
                  inputProps={{
                    style: {
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "1rem",
                      fontWeight: "600",
                    },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "0.75rem",
                    },
                  }}
                  KeyboardButtonProps={{
                    style: {
                      color: "#793EF5",
                    },
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const searchRoles = ["ios Developer","Backend Developer","Frontend Developer","Android Developer","Full Stack Developer"];
const languages = ["Swift", "Java", "Python", "JavaScript", "Reactjs"];
export default FormContainer;
