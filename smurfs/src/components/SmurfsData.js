import React from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf, editSmurf } from "../actions";

const SmurfsData = props => {
  return (
    <>
      <button onClick={() => props.getSmurfs()}>Get Smurfs</button>
      {props.smurfs.map(smurf => (
        <div key={smurf.id}>
          <h2>Name: {smurf.name}</h2>
          <h5>Age: {smurf.age}</h5>
          <h5>Height: {smurf.height}</h5>
          <button onClick={() => props.deleteSmurf(smurf.id)}>
            DELETE SMURF
          </button>
          <button onClick={() => props.editSmurf(smurf.id)}>Edit Smurf</button>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf, editSmurf }
)(SmurfsData);
