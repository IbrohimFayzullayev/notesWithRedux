import React from "react";
import { connect } from "react-redux";
import { removeNoteAction } from "../actions";

const NoteList = (props) => {
  console.log(props);

  const removeNote = (e) => {
    let a = "";
    let found = props.noteList.find((el, index) => {
      a = index;
      return el.id === e.id;
    });
    console.log(a);
    // props.noteList.splice(a, a + 1);
    // console.log(props.noteList)
  };
  const renderNotes = () => {
    return props.noteList.map((val) => {
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
          <div className="content" style={{ height: "120px" }}>
            <h4 className="ui sub header">{val.text}</h4>
          </div>
          <div className="extra content" style={{ display: "flex" }}>
            <button className="ui inverted green button">Edit</button>
            <button
              onClick={() => removeNote(val)}
              className="ui inverted red button"
            >
              Remove
            </button>
          </div>
        </div>
      );
    });
  };
  return renderNotes();
};

const getMyState = (state) => state;
export default connect(getMyState)(NoteList);
