import React from "react";
import NoteList from "./NoteList";
import AddNote from "./AddNote";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Create Notes For You
        </h2>
        <div style={{ marginTop: "30px", gap: "15px" }} className="ui grid">
          <AddNote />
          <NoteList />
        </div>
      </div>
    );
  }
}

export default App;
