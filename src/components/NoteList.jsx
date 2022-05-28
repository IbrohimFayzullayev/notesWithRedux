import React, { useState } from "react";
import { connect } from "react-redux";
import { removeNoteAction, editNoteAction } from "../actions";

let editId;
let editText = "";
// hello
// salom
const NoteList = (props) => {
  let storedNames = JSON.parse(localStorage.getItem("notes"));
  let arr = [];
  if (storedNames) {
    arr = storedNames;
  } else {
    arr = props.noteList;
  }
  const [text, setText] = useState("");
  const [check, setCheck] = useState(0);
  const removeNote = (e) => {
    let a = "";
    arr.find((el, index) => {
      a = index;
      return el.id === e.id;
    });

    return props.removeNoteAction(a);
  };

  const editNoteList = (e) => {
    editText = e.text;
    editId = e.id;
    setCheck(1);
  };

  const formSubmit = () => {
    setCheck(0);
    localStorage.setItem("notes", JSON.stringify(arr));
  };
  const editNote = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formSubmit(e);
        }}
      >
        <div className="field">
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{
              resize: "none",
              border: "0.1px solid #f0f0f0",
              outline: "none",
              height: "90px",
              marginBottom: "20px",
            }}
            defaultValue={editText}
          ></textarea>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button type="submit" className="ui inverted button  green">
            Save
          </button>
          <p>Remaining: {text.length ? 300 - text.length : "300"}</p>
        </div>
      </form>
    );
  };

  const editRemoveAdd = (val, text) => {
    return (
      <div>
        <div className="content" style={{ height: "120px" }}>
          <h4 className="ui sub header">{text ? text : val.text}</h4>
        </div>
        <div className="extra content" style={{ display: "flex" }}>
          <button
            onClick={() => {
              editNoteList(val);
            }}
            className="ui inverted green button"
          >
            Edit
          </button>
          <button
            onClick={() => removeNote(val)}
            className="ui inverted red button"
          >
            Remove
          </button>
        </div>
      </div>
    );
  };
  return arr.map((val) => {
    if (val.id === editId) {
      val.text = text;
    }
    return (
      <div
        key={val.id}
        className="ui card three wide column"
        style={{ margin: "14px 0" }}
      >
        <div className="content">
          <div className="header">
            {val.time} , {val.date}
          </div>
        </div>
        {check && editId === val.id
          ? editNote()
          : editId === val.id
          ? editRemoveAdd(val, text)
          : editRemoveAdd(val)}
      </div>
    );
  });
};

const getMyState = (state) => state;
export default connect(getMyState, { removeNoteAction, editNoteAction })(
  NoteList
);
