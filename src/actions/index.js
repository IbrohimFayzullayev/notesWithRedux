export const addNoteAction = (data) => {
  return { type: "ADD", payload: data };
};

export const removeNoteAction = (data) => {
  return { type: "REMOVE", payload: data };
};

export const editNoteAction = (data) => {
  return { type: "EDIT", payload: data };
};
