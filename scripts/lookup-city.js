import CityCard from "./component.js";
import getData from "./functions/fetch-airport-info.js";
import getPic from "./functions/fetch-airport-picture.js";
import getInputs from "./functions/get-inputs.js";
import createElement from "./functions/set-component-attributes.js";
import reset from "./functions/reset.js";
import { openDatabase, storeTrip } from "./functions/open-database.js";

openDatabase();

export default async function lookup() {
  reset();
  try {
    const userInput = await getInputs();
    console.log(userInput);

    const dataInfo = await getData(userInput);
    const picInfo = await getPic(dataInfo.location);

    console.log(dataInfo);
    //console.log(picInfo);

    storeTrip({ dataInfo, picInfo }, dataInfo.id);

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
