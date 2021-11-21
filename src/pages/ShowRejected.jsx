import React from "react";
import CandidateCard from "../components/CandidateCard";
import Navbar from "../components/Navbar";
import "./ShowRejected.css";

const ShowRejected = () => {
  document.title = "Rejected Candidates";
  var rejectedCandidates = [];
  rejectedCandidates = JSON.parse(sessionStorage.getItem("rejectedCandidates"));
  if (!rejectedCandidates) {
    return (
      <div className="container">
        <Navbar active={"rejected"} />
        <h3>No rejected candidates found!</h3>
      </div>
    );
  }
  return (
    <>
      <Navbar active={"rejected"} />
      <div className="container">
        <div className="cards">
          {rejectedCandidates.map((candidate) => {
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

export default ShowRejected;
