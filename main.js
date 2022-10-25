import "./style.css";
import lookup from "./scripts/lookup-city";

document.querySelector("#app").innerHTML = `
  <div id="main">
    <h1>Vacation Planner</h1>
    <input id="location" placeholder="enter an airport..." />
    <button id="submit">enter</button>
  </div>
  <div id="results">
    <city-card location="Atlanta, Georgia, United States" website="http://www.atl.com/" image="https://i.ibb.co/52zkWYD/top-otolaryngology-facial-plastic-surgery-doctors-atlanta-georgia-usa.jpg"></city-card>
  </div>
  <template id="output-template">
    <style>
        .text {
          color: black;
        }
        #image {
          width: 20rem;
        }
        #radar-image {
          width: 3rem;
          position: absolute;
          left: 0px;
          top: 5px;
        }
        #city-output {
          background-color: rgb(64, 64, 64);
          border-radius: 20px;
          min-height: 30rem;
          min-width: 25rem;
          padding: 2rem;
          position: relative;
          text-align: center;
          font-weight: bold;
          border: 3px solid red;
        }
        #heading{
          font-size: 20px;
          position: relative;
          border: 3px solid purple;
        }
        #main-section{
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 2rem;
          border: 3px solid green;
        }
        #attractions, #info{
          position: relative;
          width: 20rem;
          height: 25rem;
          border: 3px solid yellow;
        }
        #next-flight{
          position: relative;
          width: 99%;
          height: 15%;
          background: white;
          border: 3px solid orange;
        }
        #footer {
          position: relative;
          top: 1.5rem;
        }
        #website, #website-input{
          color: white;
          font-size: 20px;
          font-size: 10px;
        }
        #website:hover{
          color: lightblue;
        }
      
    </style>
    <div id="city-output">
      <div id="heading">
        <h1>Let us plan your Vacation to:</h1>
        <h2 id="location"></h2>
      </div>
      <div id="main-section">
        <div class="middle" id="info"> 
          <img class="middle" id="image" src="" /> 
          <p>ATL BABY</p>
          <p>Airport name</p>
          <div id="next-flight">
            <img src="./assets/icons/radar.png" id="radar-image">
            <p class="text"> Next avaible flight </p>
          </div>
        </div>
        <div class="middle" id="attractions"> 
          <ul>
            <div class="attractions"><li>Attraction 1</li></div>
            <div class="attractions"><li>Attraction 2</li></div>
            <div class="attractions"><li>Attraction 3</li></div>
            <div class="attractions"><li>Attraction 4</li></div>
          </ul>
        </div>
      </div>
      <footer id="footer">
        <p id="website-input">Website: <a id="website"></a></p>
      </footer>
    </div>
  </template>
`;
const button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  lookup();
});
