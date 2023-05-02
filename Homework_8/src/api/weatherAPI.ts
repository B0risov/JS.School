import {dataFetch} from "./api";
import {WeatherResponse} from "../types/WeatherResponse";

const weatherAPI = dataFetch('https://api.weatherapi.com/v1')

const WEATHER_API_KEY: string = '5141165b150c4e2b80993434231904'

export const getWeather = async (location: string): Promise<WeatherResponse> => {
    return await weatherAPI<WeatherResponse>(`current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`)
}

export const getCurrentPosition = async (): Promise<string> => {
    return new Promise((resolve): void => {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => resolve(position.coords.latitude + ',' + position.coords.longitude),
            () => resolve('Tbilisi')
        )
    })
}