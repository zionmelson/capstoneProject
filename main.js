import "./style.css";
import lookup from "./scripts/lookup-city";

document.querySelector("#app").innerHTML = `
    <div id="main">
      <h1>Moving Planner</h1>
      <label for="location">Pick a City</label>
      <select id="location">
        <option value="ATL">Atlanta</option>
        <option value="LAX">Los Angeles</option>
        <option value="LGA">New York</option>
        <option value="DCA">Washington DC</option>
      </select>
      <button id="submit">enter</button>
    </div>
    <div id="results">
    </div>
    <template id="output-template">
      <style>
          .images {
            width: 20rem;
          }
          .city-output {
            background-color: rgba(64, 64, 64, 0.4);
            border-radius: 20px;
            min-height: 30rem;
            min-width: 25rem;
            padding: 2rem;
            position: relative;
            text-align: center;
            font-weight: bold;
          }
          .heading-section{
            font-size: 20px;
            position: relative;
          }
          .main-section{
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: row;
            padding: 2rem;
          }
          .info-elements {
            position: relative;
            width: 20rem;
            min-height: 10rem;
            max-height: 25rem;
            margin: 1rem;
          }
          .footer-section {
            top: 1.5rem;
            height: 3rem;
          }
          .website-input{
            color: white;
            font-size: 20px;
            font-size: 10px;
          }
          #website:hover{
          color: lightblue;
          }
          #black-text {
            color: black;
          }
      </style>
      <div class="city-output">
        <div class="heading-section">
          <h1>Let us plan your Move to:</h1>
          <h2 id="location"></h2>
        </div>
        <div class="main-section">
          <div class="info-elements"> 
            <img class="images" id="airport-image" src="" alt="Pic of Airport City" /> 
            <p id="airport-description"></p>
            <p id="airport-name"></p>
          </div>
          <div class="attractions-list"> 
              <div class="info-elements">
                <div class="costs"></div>
              </div>
          </div>
        </div>
        <div class="add-button">
          <button class="add">Add</button>
        </div>
        <div class="footer-section">
          <p class="website-input">Website: <a class="website-input" id="website"></a></p>
        </div>
      </div>
  </template>
`;
const button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  lookup();
});
