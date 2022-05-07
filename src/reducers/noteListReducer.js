const noteListReducer = (
  history = [
    {
      text: "This is note for you",
      date: "7/5/2022",
      time: "11:20:12 PM",
      id: "451001",
    },
  ],
  note
) => {
  if (note.type === "ADD") {
    return (history = [note.payload, ...history]);
  }
  return history;
};

export default noteListReducer;
