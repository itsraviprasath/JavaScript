const API_KEY = "91f613a96848aa604914d52a8091ee8c";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    document.getElementById(
      "weather-info"
    ).innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

function displayWeather(data) {
  document.getElementById("weather-info").innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}
