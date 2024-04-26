// 82348b15dac2df33167cd4835b453672
// 485a8a4d81f8dbb51412c460656b4b4e
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=82348b15dac2df33167cd4835b453672
// https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&APPID=485a8a4d81f8dbb51412c460656b4b4e
async function getWeatherData() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&APPID=485a8a4d81f8dbb51412c460656b4b4e"
    );
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export { getWeatherData };
