console.log("DOM FILE");

body = document.querySelector("body");

const styleBody = () => {
  body.style.background = "orange";
};

const addTitle = (text) => {
  const title = document.createElement("h2");
  title.textContent = text;
  body.appendChild(title);
};

export const contact = 'mohsinrazakhan4455@gmail.com';

export {styleBody, addTitle, contact};
