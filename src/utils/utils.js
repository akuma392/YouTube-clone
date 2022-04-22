export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
  },
};

export const timeConvert = (given_seconds) => {
  let hours = Math.floor(given_seconds / 3600);
  let minutes = Math.floor((given_seconds - hours * 3600) / 60);
  let seconds = given_seconds - hours * 3600 - minutes * 60;

  if (hours) {
    return `${hours}hr ${minutes}mins ${seconds}sec`;
  } else {
    return `${minutes}mins ${seconds}sec`;
  }
};
