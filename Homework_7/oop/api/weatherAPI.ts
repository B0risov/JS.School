import {dataFetch} from "./api";
import {WeatherResponse} from "../types/WeatherResponse";

const weatherAPI = dataFetch('https://api.weatherapi.com/v1')

const WEATHER_API_KEY: string = '8b1638203941464fb58170357231404'

export const getWeather = async (location: string): Promise<WeatherResponse> => {
    return await weatherAPI<WeatherResponse>(`current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`)
}