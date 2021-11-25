fetch('http://api.openweathermap.org/data/2.5/weather?q=Minsk,by&appid=61a37e5ee2a5e9b7706c36c4d63a71e7')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentDate = now.getDate();

        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0].description;        
        document.querySelector('.icon_weather').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
        document.querySelector('.date').textContent = `${currentDate}.${currentMonth} `
        //https://openweathermap.org/img/wn/04d@2x.png
    })
    .catch(function() {

    });