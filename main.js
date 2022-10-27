import "./style.css";
import lookup from "./scripts/lookup-city";

document.querySelector("#app").innerHTML = `
    <div id="main">
      <h1>Moving Planner</h1>
      <input id="location" placeholder="enter an airport..." />
      <button id="submit">enter</button>
    </div>
    <div id="results">
      <city-card location="Atlanta, Georgia, United States" 
        website="http://www.atl.com/" 
        image="https://i.ibb.co/52zkWYD/top-otolaryngology-facial-plastic-surgery-doctors-atlanta-georgia-usa.jpg" 
        description="Atlanta, GA"
        airport-name="Hartsfield Jackson"></city-card>
    </div>
    <template id="output-template">
      <style>
          .images {
            width: 20rem;
          }
          .city-output {
            background-color: rgb(64, 64, 64);
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
