import React from "react";
import CandidateCard from "../components/CandidateCard";
import Navbar from "../components/Navbar";
import "./ShowShortlisted.css";

const ShowShortlisted = () => {
  document.title = "Shortlisted Candidates";
  var shortlistedCandidates = [];
  shortlistedCandidates = JSON.parse(
    sessionStorage.getItem("shortlistedCandidates")
  );
  if (!shortlistedCandidates) {
    return (
      <div className="container">
        <Navbar active={"shortlisted"} />
        <h3>No shortlisted candidates found!</h3>
      </div>
    );
  }

  return (
    <>
      <Navbar active={"shortlisted"} />
      <div className="container">
        <div className="cards">
          {shortlistedCandidates.map((candidate) => {
            return (
              <CandidateCard
                key={candidate["id"]}
                name={candidate["name"]}
                id={candidate["id"]}
                img={candidate["Image"]}
                showDetails={false}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowShortlisted;
