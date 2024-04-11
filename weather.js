function fetchAndUpdateWeather(cityElement, classSuffix) {
  const apiKey = "0c69eaf9c23457f8515a2463dfad3913";
  const city = cityElement.innerText;

  if (!city) return; // If city element is empty or doesn't exist, return

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const { name } = data;
      const { icon } = data.weather[0];
      const { temp } = data.main;
      const { main } = data.weather[0];

      document.querySelector(`.small-caption.${classSuffix}`).innerText = main;
      document.querySelector(`.city.${classSuffix}`).innerText = name;
      document.querySelector(`.icon-text.${classSuffix}`).innerText = icon;
      document.querySelectorAll(`.tempe.${classSuffix}`).forEach(el => el.innerText = Math.round(temp) + "°F");

      const iconCode = icon.slice(0, 2);
      document.querySelectorAll(`.weathericon.${classSuffix}`).forEach(weatherIconElement => {
        weatherIconElement.classList.add(`iconcode-${iconCode}`);
      });
    });
}

fetchAndUpdateWeather(document.querySelector(".city.one"), "one");
fetchAndUpdateWeather(document.querySelector(".city.two"), "two");
fetchAndUpdateWeather(document.querySelector(".city.three"), "three");
fetchAndUpdateWeather(document.querySelector(".city.four"), "four");
fetchAndUpdateWeather(document.querySelector(".city.five"), "five");
fetchAndUpdateWeather(document.querySelector(".city.six"), "six");
fetchAndUpdateWeather(document.querySelector(".city.seven"), "seven");
fetchAndUpdateWeather(document.querySelector(".city.eight"), "eight");
