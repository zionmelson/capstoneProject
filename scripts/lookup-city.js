import CityCard from "./city-component";
import getData from "./functions/data-fetch";
import getPic from "./functions/picture-fetch";
import getInputs from "./functions/get-inputs";
import createElement from "./functions/create-element";

export default async function lookup() {
  const results = document.getElementById("results");

  results.textContent = "";
  try {
    const userInput = await getInputs();
    console.log(userInput);

    const dataInfo = await getData(userInput);
    const picInfo = await getPic(dataInfo.state);

    console.log(dataInfo);
    console.log(picInfo);

    const cityCard = await createElement(dataInfo, picInfo);
    results.appendChild(cityCard);
  } catch (err) {
    console.error(err);
  }
}

customElements.define("city-card", CityCard);
