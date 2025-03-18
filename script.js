let city2 = document.getElementById('city2');

const getWeather = (city) => {  
    const cityName = city;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e675e02fa0bde8048172e2771f262eb`)
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP error! Status ${response.status}`);
        }
        

        return response.json();
    })
    
    // .then((response) => response.json())
    
    .then((response) => {
        if(response.error){
            throw new Error(response.error.message);
        }
        
        
        if (city2 !== null) city2.innerHTML = response.name;
        
        
        console.log(response)
        all.innerHTML = response.clouds.all;
        temp.innerHTML = parseInt(response.main.temp - 273);
        humidity.innerHTML = response.main.humidity;
        description.innerHTML = response.weather[0].description;
        visibility.innerHTML = response.visibility / 1000
        feels_like.innerHTML = parseInt(response.main.feels_like - 273);
        temp_min.innerHTML = parseInt(response.main.temp_min - 273);
        temp_max.innerHTML = parseInt(response.main.temp_max - 273);
        pressure.innerHTML = response.main.pressure;
        deg.innerHTML = response.wind.deg;
        speed.innerHTML = parseInt(response.wind.speed * 1.609);
        country.innerHTML = response.sys.country;
        // city2.innerHTML = response.location.name;
    })

    .catch((err) => {
        city2.innerHTML = `${cityName} not available`;
        all.innerHTML = "-";
        temp.innerHTML = "-";
        humidity.innerHTML = "-";
        description.innerHTML = "-";
        visibility.innerHTML = "-";
        feels_like.innerHTML = "-";
        temp_min.innerHTML = "-";
        temp_max.innerHTML = "-";
        pressure.innerHTML = "-";
        deg.innerHTML = "-";
        speed.innerHTML = "-";
        country.innerHTML = "-";

        console.error('Error: ', err.message);
    });
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value);
})

getWeather('london');

const sumit = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=5e675e02fa0bde8048172e2771f262eb")
        .then((response) => response.json())
        .then((response) => {
            temp1.innerHTML = parseInt(response.main.temp - 273);
            feels_like1.innerHTML = parseInt(response.main.feels_like - 273);
            humidity1.innerHTML = response.main.humidity;
            visibility1.innerHTML = parseInt(response.visibility / 1000);
            speed1.innerHTML = parseInt(response.wind.speed * 1.609);
            deg1.innerHTML = response.wind.deg;
        })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=5e675e02fa0bde8048172e2771f262eb")
        .then((response) => response.json())
        .then((response) => {
            temp2.innerHTML = parseInt(response.main.temp - 273);
            feels_like2.innerHTML = parseInt(response.main.feels_like - 273);
            humidity2.innerHTML = response.main.humidity;
            visibility2.innerHTML = parseInt(response.visibility / 1000);
            speed2.innerHTML = parseInt(response.wind.speed * 1.609);
            deg2.innerHTML = response.wind.deg;
        })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=5e675e02fa0bde8048172e2771f262eb")
        .then((response) => response.json())    
        .then((response) => {
            temp3.innerHTML = parseInt(response.main.temp - 273);
            feels_like3.innerHTML = parseInt(response.main.feels_like - 273);
            humidity3.innerHTML = response.main.humidity;
            visibility3.innerHTML = parseInt(response.visibility / 1000);
            speed3.innerHTML = parseInt(response.wind.speed * 1.609);
            deg3.innerHTML = response.wind.deg;
        })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=5e675e02fa0bde8048172e2771f262eb")
        .then((response) => response.json())
        .then((response) => {
            temp4.innerHTML = parseInt(response.main.temp - 273);
            feels_like4.innerHTML = parseInt(response.main.feels_like - 273);
            humidity4.innerHTML = response.main.humidity;
            visibility4.innerHTML = parseInt(response.visibility / 1000);
            speed4.innerHTML = parseInt(response.wind.speed * 1.609);
            deg4.innerHTML = response.wind.deg;
        })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=5e675e02fa0bde8048172e2771f262eb")
        .then((response) => response.json())
        .then((response) => {
            temp5.innerHTML = parseInt(response.main.temp - 273);
            feels_like5.innerHTML = parseInt(response.main.feels_like - 273);
            humidity5.innerHTML = response.main.humidity;
            visibility5.innerHTML = parseInt(response.visibility / 1000);
            speed5.innerHTML = parseInt(response.wind.speed * 1.609);
            deg5.innerHTML = response.wind.deg;
        })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=5e675e02fa0bde8048172e2771f262eb")
        .then((response) => response.json())
        .then((response) => {
            temp6.innerHTML = parseInt(response.main.temp - 273);
            feels_like6.innerHTML = parseInt(response.main.feels_like - 273);
            humidity6.innerHTML = response.main.humidity;
            visibility6.innerHTML = parseInt(response.visibility / 1000);
            speed6.innerHTML = parseInt(response.wind.speed * 1.609);
            deg6.innerHTML = response.wind.deg;
        })
        .catch((err) => {
            temp6.innerHTML = "-";
            feels_like6.innerHTML = "-";
            humidity6.innerHTML = "-";
            visibility6.innerHTML = "-";
            speed6.innerHTML = "-";
            deg6.innerHTML = "-";
    
            temp5.innerHTML = "-";
            feels_like5.innerHTML = "-";
            humidity5.innerHTML = "-";
            visibility5.innerHTML = "-";
            speed5.innerHTML = "-";
            deg5.innerHTML = "-";
    
            temp4.innerHTML = "-";
            feels_like4.innerHTML = "-";
            humidity4.innerHTML = "-";
            visibility4.innerHTML = "-";
            speed4.innerHTML = "-";
            deg4.innerHTML = "-";
    
            temp3.innerHTML = "-";
            feels_like3.innerHTML = "-";
            humidity3.innerHTML = "-";
            visibility3.innerHTML = "-";
            speed3.innerHTML = "-";
            deg3.innerHTML = "-";
    
            temp2.innerHTML = "-";
            feels_like2.innerHTML = "-";
            humidity2.innerHTML = "-";
            visibility2.innerHTML = "-";
            speed2.innerHTML = "-";
            deg2.innerHTML = "-";
    
            temp1.innerHTML = "-";
            feels_like1.innerHTML = "-";
            humidity1.innerHTML = "-";
            visibility1.innerHTML = "-";
            speed1.innerHTML = "-";
            deg1.innerHTML = "-";
    
            console.error('Error: ', err.message);
        });
}

sumit();
setInterval(sumit, 60000);
