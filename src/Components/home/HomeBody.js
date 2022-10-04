import React from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ApprenticeshipCard from "./card/ApprenticeshipCard";

function HomeBody() {
  return (
    <section className="home_section">
      <header className="home_header">
        <div
          className="header_title"
          onClick={() => {
            document.querySelectorAll("*").forEach((elem) => {
              if (elem.offsetWidth > document.documentElement.offsetWidth) {
                console.log("Problem child: ", elem);
              }
            });
          }}
        >
          Apprenticeship
        </div>
        <div className="create_apprenticeship_btn">
          <AddBoxOutlinedIcon />
          Create New Apprenticeship
        </div>
      </header>

      <section className="grid_section">
        <ApprenticeshipCard title="Mobile App Design" />
        <ApprenticeshipCard title="Web App Development" />
        <ApprenticeshipCard title="Mobile App Design" />
        <ApprenticeshipCard title="Mobile App Design" />
        <ApprenticeshipCard title="Mobile App Design" />
        <ApprenticeshipCard title="Mobile App Design" />
        <ApprenticeshipCard title="Mobile App Design" />
      </section>
    </section>
  );
}

export default HomeBody;
