import "./style.css";
import lookup from "./scripts/lookup-city";

document.querySelector("#app").innerHTML = `
  <div id="main">
    <h1>Vacation Planner</h1>
    <input id="location" placeholder="enter an airport..." />
    <button id="submit">enter</button>
  </div>
  <div id="results"></div>
  <template id="output-template">
    <style>
        img {
          width: 50%;
        }
        #city-output {
          background-color: rgb(64, 64, 64);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 30rem;
          min-width: 25rem;
          padding: 2rem;
        }
        #heading{
          font-weight: bold;
          font-size: 20px;
          position: relative;
          top: 0;
        }
        #website{
          color: white;
          font-size: 20px;
        }
        #website:hover{
          color: lightblue;
        }
      
    </style>
    <div id="city-output">
      <div id="heading">
        <h1 id="location"></h1>
      </div>
      <img id="image" src="" />
      <a id="website"></a>
    </div>
  </template>
`;
const button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  lookup();
});
