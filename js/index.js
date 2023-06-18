// Dom Elements
const output = document.querySelector(".output");
const container = document.querySelector(".container");
// Global Variable
let url = "../bible.txt";
const method = "GET";
const assync = true;
const generateRandomNumber = (n) => Math.floor(Math.random() * n);
// Get Qoute Function
const getQoutes = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, assync);
  xhr.onload = (evt) => {
    const dataArray = xhr.responseText
      .split("\n")
      .filter(
        (data) =>
          data.charAt(0) != "#" &&
          data.charAt(0) != ";" &&
          data != "\r" &&
          data != ""
      );
    const verse = dataArray[generateRandomNumber(dataArray.length)].split("\t");

    output.innerHTML = `<h4>
      ${verse[0]}
    </h4>
    <h2>${verse[1]}</h2>`;
  };
  xhr.onerror = (e) => console.log("Something Went Wrong");
  xhr.send();
};

getQoutes();
setInterval(getQoutes, 5000);
container.addEventListener("click", getQoutes);
