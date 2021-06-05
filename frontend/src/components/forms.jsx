import React, { useState } from "react";
import "./forms.css";

function Forms() {
  const [name, setName] = useState("");
  const [result, setResult] = useState([]);

  //function to search image
  const searchImage = (e) => {
    e.preventDefault();

    //api url
    let url = "http://localhost:8081/" + name;

    //fetch
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.image_results);
        setResult(data.image_results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const resultJSX = result.map((item) => (
    <div class="content">
      <img src={item.image.src}></img>
    </div>
  ));
  return (
    <>
      <div id="forms">
        <form>
          <input
            type="text"
            placeholder="Search An Image"
            id="targetName"
            name={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button id="searchImage" onClick={searchImage}>
            Search Image
          </button>
        </form>
      </div>
      <div id="result">{resultJSX}</div>
    </>
  );
}

export default Forms;
