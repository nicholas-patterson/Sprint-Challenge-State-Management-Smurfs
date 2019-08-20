import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const AddSmurfToDB = props => {
  const [smurf, setSmurf] = useState([]);

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });

    return e.target.name === "age"
      ? setSmurf({
          ...smurf,
          age: parseInt(e.target.value)
        })
      : null;
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        type="text"
        name="name"
        value={smurf.name}
        onChange={handleChange}
      />
      <input
        placeholder="Age"
        type="number"
        name="age"
        value={smurf.age}
        onChange={handleChange}
      />
      <input
        placeholder="height"
        type="text"
        name="height"
        value={smurf.height}
        onChange={handleChange}
      />
      <button onClick={() => props.addSmurf(smurf)}>Add Smurf</button>
    </form>
  );
};

export default connect(
  null,
  {
    addSmurf
  }
)(AddSmurfToDB);
