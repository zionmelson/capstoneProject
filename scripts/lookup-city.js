import CityCard from "./component";
import getData from "./functions/fetch-airport-info";
import getPic from "./functions/fetch-airport-picture";
import getInputs from "./functions/get-inputs";
import createElement from "./functions/set-component-attributes";
import reset from "./functions/reset";

export default async function lookup() {
  reset();
  try {
    const userInput = await getInputs();
    console.log(userInput);

    const dataInfo = await getData(userInput);
    const picInfo = await getPic(dataInfo.location);

    //console.log(dataInfo);
    //console.log(picInfo);

    const cityCard = await createElement(dataInfo, picInfo);
    results.appendChild(cityCard);
  } catch (err) {
    console.error(err);
  }
}

customElements.define("city-card", CityCard);

// add a few apis
// https://rapidapi.com/aedbx-aedbx/api/aerodatabox
//
