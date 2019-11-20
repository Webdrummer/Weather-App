class Weather {
    constructor(city, country) {
        this.apiKey = 'a70e20754cc78b27f14e1b45291900d6';
        this.city = city;
        this.country = country;
    }


    // Fetch weather from API

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}



