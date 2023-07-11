const weatherData = {
  location: {
    name: "Milan",
    region: "Lombardia",
    country: "Italy",
    lat: 45.47,
    lon: 9.2,
    tz_id: "Europe/Rome",
    localtime_epoch: 1688489246,
    localtime: "2023-07-04 18:47",
  },
  current: {
    last_updated_epoch: 1688489100,
    last_updated: "2023-07-04 18:45",
    temp_c: 29.0,
    temp_f: 84.2,
    is_day: 1,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003,
    },
    wind_mph: 5.6,
    wind_kph: 9.0,
    wind_degree: 190,
    wind_dir: "S",
    pressure_mb: 1012.0,
    pressure_in: 29.88,
    precip_mm: 0.2,
    precip_in: 0.01,
    humidity: 48,
    cloud: 25,
    feelslike_c: 34.7,
    feelslike_f: 94.4,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 6.0,
    gust_mph: 3.1,
    gust_kph: 5.0,
  },
};



function fetchWeatherData(){
    const {name,region,country,localTime} = weatherData.location;
    const {temp_c,temp_f,condition,is_day} =weatherData.current;

    const dayTime = locationDetail(localTime)



}
