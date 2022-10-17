const apikey = import.meta.env.VITE_API_KEY;

export default async function getData(param) {
  const infoOps = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${apikey}`,
      "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
    },
  };

  const fetchData = await fetch(
    `https://airport-info.p.rapidapi.com/airport?iata=${param}`,
    infoOps
  );

  const dataInfo = await fetchData.json();
  return dataInfo;
}
