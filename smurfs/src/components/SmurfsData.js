import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfsData = props => {
  return (
    <>
      <button onClick={() => props.getSmurfs()}>Get Smurfs</button>
      {props.smurfs.map(smurf => (
        <div key={smurf.id}>
          <h2>Name: {smurf.name}</h2>
          <h5>Age: {smurf.age}</h5>
          <h5>Height: {smurf.height}</h5>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfsData);
