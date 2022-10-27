const apikey = import.meta.env.VITE_API_KEY;

export default async function getInfo(city, country) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${apikey}`,
      "X-RapidAPI-Host": "cost-of-living-and-prices.p.rapidapi.com",
    },
  };

  country.replace(" ", "%20");
  const fetchCityInfo = await fetch(
    `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${city}&country_name=${country}`,
    options
  );

  const cityInfo = await fetchCityInfo.json();
  return cityInfo;
}
