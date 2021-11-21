import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CandidateCard from "../components/CandidateCard";
import "./ShowAll.css";

const ShowAll = () => {
  document.title = "Top Candidates";
  var [candidateData, setCandidateData] = useState([]);
  var [isLoaded, setIsLoaded] = useState(false);
  var [tempData, setTempData] = useState([]);
  var [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    ).then((api_response) => {
      api_response.json().then((data) => {
        setCandidateData(data);
        setTempData(data);
        sessionStorage.setItem("candidateData", JSON.stringify(data));
        setIsLoaded(true);
      });
    });
  }, []);

  useEffect(() => {
    console.log(`You searched for ${searchTerm}`);
    setCandidateData([]);
    tempData.map((candidate) => {
      if (candidate["name"].toLowerCase().includes(searchTerm.toLowerCase())) {
        setCandidateData((arr) => [...arr, candidate]);
      }
    });
    if (searchTerm === "") {
      setCandidateData(tempData);
    }
  }, [searchTerm, tempData]);

  if (!isLoaded) {
    return <h1>LOADING ...</h1>;
  }
  return (
    <div className="container">
      <Navbar active="top" />
      <input
        className="search-box"
        type="text"
        placeholder="Search candidates..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="cards">
        {candidateData.length === 0 ? (
          <h2>0 results found for "{searchTerm}"</h2>
        ) : (
          ""
        )}
        {candidateData.map((candidate) => {
          return (
            <CandidateCard
              key={candidate["id"]}
              name={candidate["name"]}
              id={candidate["id"]}
              img={candidate["Image"]}
              showDetails={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowAll;
