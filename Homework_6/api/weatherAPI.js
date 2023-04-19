const weatherAPI = dataFetch('https://api.weatherapi.com/v1')

const weather_api_key = '5141165b150c4e2b80993434231904'

const getWeather = async (location) => {
    return await weatherAPI(`current.json?key=${weather_api_key}&q=${location}&aqi=no`)
}