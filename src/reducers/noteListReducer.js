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
      return (history = [note.payload, ...history]);
    case "REMOVE":
      let arr = history.filter((val, id) => {
        return id !== note.payload;
      });
      return (history = arr);
    case "EDIT":
      return history;
    default:
      return history;
  }
};

export default noteListReducer;
