import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "./Candidate.css";

const Candidate = () => {
  var params = useParams();
  const navigate = useNavigate();
  var candidate = null;
  var candidateData = [];
  candidateData = JSON.parse(sessionStorage.getItem("candidateData"));
  if (!candidateData || candidateData.length === 0) {
    navigate("/");
  }
  if (!params.id) {
    return (
      <div className="container">
        <Navbar />
        <h3>No candidate ID provided!</h3>
      </div>
    );
  }
  var shortlistedCandidates = JSON.parse(
    sessionStorage.getItem("shortlistedCandidates")
  );
  console.log(shortlistedCandidates);
  var rejectedCandidates = JSON.parse(
    sessionStorage.getItem("rejectedCandidates")
  );

  var found = false;
  for (var i = 0; i < candidateData.length; i++) {
    if (candidateData[i]["id"] === params.id) {
      candidate = candidateData[i];
      found = true;
    }
  }
  if (!found) {
    return (
      <div className="container">
        <Navbar />
        <h3>No such candidate found!</h3>
      </div>
    );
  }

  function handleAccept() {
    var tempList = [];

    if (!shortlistedCandidates) {
      tempList.push(candidate);
      sessionStorage.setItem("shortlistedCandidates", JSON.stringify(tempList));
    } else {
      tempList = shortlistedCandidates;
      tempList.push(candidate);
      sessionStorage.setItem("shortlistedCandidates", JSON.stringify(tempList));
    }
    alert("Candidate Shortlisted! \nClick OK to return to the Home Page");
    navigate("/");
  }

  function handleReject() {
    var tempList = [];
    if (!rejectedCandidates) {
      tempList.push(candidate);
      sessionStorage.setItem("rejectedCandidates", JSON.stringify(tempList));
    } else {
      tempList = rejectedCandidates;
      tempList.push(candidate);
      sessionStorage.setItem("rejectedCandidates", JSON.stringify(tempList));
    }
    alert("Candidate Rejected! \nClick OK to return to the Home Page");
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>{`${candidate["name"]}`}</h2>
        <img src={candidate["Image"]} alt="" />
        <h4>{`Id : ${candidate["id"]}`}</h4>
        <div className="accept-or-reject">
          <Button txt="Accept" onClick={handleAccept} />
          <Button txt="Reject" onClick={handleReject} />
        </div>
      </div>
    </>
  );
};

export default Candidate;
