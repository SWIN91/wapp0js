let weather = {
    apiKey : "837823cd32b24a911e5f1a92e271709f",
    // let city = document.querySelector(".city"),
    fetchWeather: function(city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/find?q=' 
            + city 
            + '&units=imperial&appid='
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { description } = data.weather[0].description;
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
        //script.js:16 Uncaught (in promise) TypeError: 
        //Cannot read properties of undefined (reading '0')
        //at Object.displayWeather (script.js:16) at script.js:11
        //ALSO WITHOUTH THE [0], I GET script.js:16 Uncaught (in promise) 
        //TypeError: Cannot destructure property 'description' of 'data.weather'
        //as it is undefined. at Object.displayWeather (script.js:16) at script.js:11 
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        const { temp, temp_min, temp_max, humidity } = data.main;
        console.log(name, icon, description, temp, temp_min, temp_max, humidity);
        document.querySelector(".city").innerText = "Weather in " + name;
    }
};