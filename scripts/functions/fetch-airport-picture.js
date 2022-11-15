const apikey = import.meta.env.VITE_API_KEY;

export default async function getPic(param) {
  const picOps = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${apikey}`,
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };

  const fetchPic = await fetch(
    `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${param}`,
    picOps
  );

  const picInfo = await fetchPic.json();

  return picInfo;
}
