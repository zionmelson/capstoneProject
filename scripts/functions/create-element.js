export default async function createElement(x, y) {
  const cityCard = document.createElement("city-card");

  cityCard.setAttribute("location", x.location);
  cityCard.setAttribute("website", x.website);
  cityCard.setAttribute("image", y.value[1].url);
  return cityCard;
}
