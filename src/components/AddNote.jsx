import React, { useState } from "react";
import { connect } from "react-redux";
import { addNoteAction } from "../actions";

const AddNote = (props) => {
  const [text, setText] = useState("");

  const submitForm = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    let id = String(Date.now()).slice(7);
    return props.addNoteAction({ text, time, date, id });
  };
  return (
    <div className="ui card three wide column" style={{ margin: "14px 0" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
        className="ui reply form"
      >
        <div className="field">
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button type="submit" className="ui inverted button  green">
            Save
          </button>
          <p>Remaining: {text.length ? 300 - text.length : "300"}</p>
        </div>
      </form>
    </div>
  );
};

const getMyState = (state) => state;
export default connect(getMyState, { addNoteAction })(AddNote);
