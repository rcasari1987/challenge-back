import axios from "axios";
import { WeatherResponse } from "../types/weather";

export const getWeather = async (
  lat?: string,
  lon?: string
): Promise<WeatherResponse> => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${
        lat || "-33.122987"
      }&lon=${
        lon || "-64.347757"
      }&exclude=minutely,hourly,daily,alerts&units=metric&appid=${
        process.env.OPEN_WEATHER_API_KEY
      }`
    );

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
