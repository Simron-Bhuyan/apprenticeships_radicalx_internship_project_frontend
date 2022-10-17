import * as React from "react";
import {
  styled,
  Box,
  Popper,
  Checkbox,
  TextField,
  Autocomplete,
  Divider,
  ClickAwayListener,
  AutocompleteCloseReason,
  FormControlLabel,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const PopperStyledComponent = styled(Popper)(({ theme }) => ({
  border: `1px solid ${
    theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"
  }`,
}));

export default function ReqSkills({ selectOptions }) {
  const [value, setValue] = React.useState([]);
  const [checkAll, setCheckAll] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const checkAllChange = (event) => {
    setCheckAll(event.target.checked);
    if (event.target.checked) {
      setValue(selectOptions);
    } else {
      setValue([]);
    }
  };

  React.useEffect(() => {
    console.log("Open " + open);
  }, [open]);

  const handleClickAway = (e) => {
    console.log("Handle Click Away");
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <Autocomplete
          multiple
          disableCloseOnSelect
          limitTags={3}
          id="checkboxes-tags-demo"
          options={selectOptions}
          value={value}
          open={open}
          onChange={(event, newValue, reason) => {
            if (reason === "selectOption") {
              setValue(newValue);
            } else if (reason === "removeOption") {
              setCheckAll(false);
              setValue(newValue);
            } else if (reason === "clear") {
              setValue([]);
              setCheckAll(false);
            }
          }}
          onClose={(e, reason) => {
            console.log("On Close: ", reason);
            setOpen(false);
          }}
          onOpen={() => {
            setOpen(true);
          }}
          PopperComponent={(param) => (
            <PopperStyledComponent {...param}>
              <Box {...param} />
              <Divider />
              <Box
                sx={{
                  backgroundColor: "white",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  paddingInline: "1.6rem",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkAll}
                      onChange={checkAllChange}
                      id="check-all"
                      onMouseDown={(e) => e.preventDefault()}
                    />
                  }
                  label="Select All"
                />
              </Box>
            </PopperStyledComponent>
          )}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected || checkAll}
              />
              {option.title}
            </li>
          )}
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "auto",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "flex",
            padding: "16px",
            position: "relative",
            background: "#FFFFFF",
            border: "1px solid #E2E6EB",
            boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.12)",
            borderRadius: "20px",
          }}
          renderInput={(params) => (
            <TextField {...params} label="" placeholder="" />
          )}
        />
      </Box>
    </ClickAwayListener>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const selectOptions = [
//   { title: "iOS Developer" },
//   { title: "Android Developer" },
//   { title: "Full Stack Developer" },
//   { title: "Back-end Developer" },
//   { title: "Front-end Developer" },
// ];
