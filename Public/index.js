let errors = document.getElementById('error-sec');
let cont = document.getElementById('container1');

let input_city = document.getElementById('search-city')
let date = document.getElementById('date');
let sign = document.getElementById('sign');
let tempr = document.getElementById('tempr');
let news = document.getElementById('news');
let feels = document.getElementById('feels-like');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let pressure = document.getElementById('pressure');
let rain_chance = document.getElementById('rain');
let clouds = document.getElementById('cloud');

errors.style.display = "none";
cont.style.display = "none";

let set_things = (datas)=>{
    input_city.innerText = datas.name;
    date.textContent = datas.local;
    sign.src = datas.condition.icon;
    tempr.textContent = datas.tempreture;
    news.textContent = datas.condition.text;
    feels.textContent = datas.feels;
    humidity.textContent = datas.humidit;
    wind.textContent = datas.wind_speed;
    pressure.textContent = datas.pressures;
    rain_chance.textContent = datas.chance;
    clouds.textContent = datas.cloud;
};


document.getElementById('search').addEventListener('click',async() =>{

    search.style.backgroundColor = 'black';
    search.style.color = 'white';

    const check = document.getElementById('check').value;
    console.log(check);
    
    const answer = await fetch(`/weather/info_weather?title=${check}`);
    let data = await answer.json();

    if(data.success === true){
        set_things(data);
        cont.style.display = 'block';
        errors.style.display = 'none';
    }
    else{
        errors.style.display = 'block';
        cont.style.display = 'none';
    }

    search.style.backgroundColor = '#ff4757';
    search.style.color = 'white';
    check.value = '';
    
});