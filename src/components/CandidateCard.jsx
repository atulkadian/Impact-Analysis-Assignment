import React from "react";
import "./CandidateCard.css";
import Button from "./Button";
import { useNavigate } from "react-router";
const CandidateCard = (props) => {
  var navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="candidate-img">
          <img src={props.img} alt="" />
        </div>
        <div className="candidate-name">
          <h4>{props.name}</h4>
          <div className={props.showDetails ? "" : "hidden"}>
            <Button
              txt={"View Details"}
              onClick={() => navigate(`candidate/${props.id}`)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateCard;
