import getInfo from "./fetch-city-info";

export default async function createElement(x, y) {
  const cityCard = document.createElement("city-card");

  cityCard.setAttribute("location", x.location);
  cityCard.setAttribute("website", x.website);
  cityCard.setAttribute("description", x.state);
  cityCard.setAttribute("airport-name", x.name);
  cityCard.setAttribute("image", y.value[1].url);

  const cityInfo = await getInfo(dataInfo.city, dataInfo.country);

  const prices = cityInfo.prices;

  prices.forEach((i) => {
    console.log(i);
  });

  return cityCard;
}
