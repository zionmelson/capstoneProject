import { CityCard } from "./output-city";

const apikey = import.meta.env.VITE_API_KEY;

export default async function lookup() {
  try {
    const userInput = document.getElementById("location").value;
    console.log(userInput);

    const infoOps = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${apikey}`,
        "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
      },
    };

    const picOps = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${apikey}`,
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    const fetchData = await fetch(
      `https://airport-info.p.rapidapi.com/airport?iata=${userInput}`,
      infoOps
    );

    const dataInfo = await fetchData.json();

    const fetchPic = await fetch(
      `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${dataInfo.state}`,
      picOps
    );

    const picInfo = await fetchPic.json();

    console.log(dataInfo);
    console.log(picInfo);

    const cityCard = document.createElement("city-card");

    cityCard.setAttribute("location", dataInfo.location);
    cityCard.setAttribute("website", dataInfo.website);
    cityCard.setAttribute("image", picInfo.value[1].url);
    document.body.appendChild(cityCard);
  } catch (err) {
    console.error(err);
  }
}

customElements.define("city-card", CityCard);

// add another api
// https://rapidapi.com/collection/city-data-api
