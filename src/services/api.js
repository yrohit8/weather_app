import axios from "axios";

// const API_KEY = "7f5143581a7247ca3325e3b7d393ece4";
// const API_URL = "https://api.openweathermap.org/data/2.5/weather";
export const getWeather = async (city) => {
  if (city === "") {
    alert("Please Enter the city name");
  } else {
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f5143581a7247ca3325e3b7d393ece4&units=metric`
      );
      return response.data;
    } catch (error) {
      console.log("Error while calling the api", error.message);
      return error.response;
    }
  }
};
