class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.lon = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `Temp: ${weather.main.temp}°`;
        this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.lon.textContent = `Longitude: ${weather.coord.lon}, Latitude: ${weather.coord.lat}`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed}`;

    }
}