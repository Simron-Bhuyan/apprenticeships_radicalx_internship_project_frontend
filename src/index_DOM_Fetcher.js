let body = null;
let filenameDisplayer = null;
let elementToAppend = null;

window.onload = () => {
  body = document.body;
  filenameDisplayer = document.getElementById("filenameDisplayer");
  elementToAppend = document.createElement("div");
};

export { body, filenameDisplayer, elementToAppend };
