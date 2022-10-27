import getInfo from "./fetch-city-info";

export default async function createElement(dataInfo, picInfo) {
  const cityCard = document.createElement("city-card");

  cityCard.setAttribute("location", dataInfo.location);
  cityCard.setAttribute("website", dataInfo.website);
  cityCard.setAttribute("description", dataInfo.state);
  cityCard.setAttribute("airport-name", dataInfo.name);
  cityCard.setAttribute("image", picInfo.value[1].url);

  const cityInfo = await getInfo(dataInfo.city, dataInfo.country);

  const prices = cityInfo.prices;

  prices.map((price) => {
    console.log(price.avg);
    cityCard.setAttribute("costs", price.avg);
  });

  return cityCard;
}
