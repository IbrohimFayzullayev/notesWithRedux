const noteListReducer = (
  history = [
    {
      text: "This is note for you",
      date: "5/7/2022",
      time: "11:20:12 PM",
      id: "451001",
    },
  ],
  note
) => {
  switch (note.type) {
    case "ADD":
      history = [note.payload, ...history];
      let storedNames = JSON.parse(localStorage.getItem("notes"));
      let ar = [];
      if (storedNames) {
        ar = [note.payload, ...storedNames];
      } else {
        ar = history;
      }
      localStorage.setItem("notes", JSON.stringify(ar));
      return history;
    case "REMOVE":
      let storedName = JSON.parse(localStorage.getItem("notes"));
      let arr = storedName.filter((val, id) => {
        return id !== note.payload;
      });
      localStorage.setItem("notes", JSON.stringify(arr));
      return arr;
    case "EDIT":
      localStorage.setItem("notes", JSON.stringify(history));
      return history;
    default:
      return history;
  }
};

export default noteListReducer;
