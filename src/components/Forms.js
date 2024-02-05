import React, { useState } from "react";
import "./Forms.css";
export default function Forms() {
  const [text, settext] = useState();
  let output = "";

  // FOR UPPERCASE
  const handleuppercase = () => {
    const newtext1 = output.toUpperCase();
    settext(newtext1);
    let textarea = document.getElementById("exampleFormControlTextarea1");
    textarea.value = "";
  };

  const handleonchange = (event) => {
    output = event.target.value;
  };

  // FOR LOWERCASE
  const handlelowercase = () => {
    const newtext2 = output.toLowerCase();
    settext(newtext2);
    let textarea = document.getElementById("exampleFormControlTextarea1");
    textarea.value = "";
  };

  // FOR TITLE CASE
  const handletitlecase = () => {
    const newtext2 = output.replace(/\w\S*/g, function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
    settext(newtext2);
    let textarea = document.getElementById("exampleFormControlTextarea1");
    textarea.value = "";
  };

  // FOR EXTRA SPACES
  const handleextraspaces = () => {
    const newtext3 = output.replace(/\s+/g, " ");
    settext(newtext3);
  };

  // FOR HANDLE BULLETS
  const handlebullets = () => {
    const newtext4 = output.split(/\r?\n/);
    var bulletedText = newtext4
      .map(function (line) {
        return "• " + line;
      })
      .join("\n");
    settext(bulletedText);
    let textarea = document.getElementById("exampleFormControlTextarea1");
    textarea.value = "";
  };

  // FOR CLEARING ALL
  const handleclearall = () => {
    let textarea = document.getElementById("exampleFormControlTextarea1");
    textarea.value = "";
    const nulltext = "";
    settext(nulltext);
  };

  return (
    <>
      <div className="container my-3" id="form">
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label"
            id="lable-text"
          >
            Write Here :
          </label>
          <br />
          <textarea
            onChange={handleonchange}
            class="form-textarea"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <br />
          <div className="all-buttons">
            <button
              className="btn button-effect my-2 mx-1"
              onClick={handleuppercase}
            >
              UPPER CASE
            </button>
            <button
              className="btn button-effect my-2 mx-1"
              onClick={handlelowercase}
            >
              LOWER CASE
            </button>
            <button
              className="btn button-effect my-2 mx-1"
              onClick={handletitlecase}
            >
              TITLE CASE
            </button>
            <button
              className="btn button-effect my-2 mx-1"
              onClick={handlebullets}
            >
              BULLET EACH LINE
            </button>
            <button
              className="btn button-effect my-2 mx-1"
              onClick={handleextraspaces}
            >
              CLEAR EXCESS SPACE
            </button>
            <button
              className="btn btn-danger  my-2 mx-1"
              onClick={handleclearall}
            >
              CLEAR ALL
            </button>
          </div>
        </div>
      </div>
      <div className="container preview">
        <h2 className="output my-1" id="output-text">
          Output :
        </h2>
        {/* <p className="container output-text">{text}</p> */}
        <pre className="container output-text">{text}</pre>
      </div>
    </>
  );
}
