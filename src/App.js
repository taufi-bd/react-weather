import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { CityWeather } from './components/CityWeather';
import { Forecast } from './components/Forecast';

import { getCityForecast, getCityWeather } from './utils/fetchData';
import { useDebounce } from './utils/debounceFn';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState([]);
  const [weatherforecast, setForecast] = useState();
  const [city, setCity] = useState('London');
  const [isError, setError] = useState(false);
  const delay = 1000;

  useEffect(() => {
    if (!city) {
      return <div>no city found</div>;
    }
    getCityWeather(city)
      .then(weatherData => {
        setWeather(weatherData);
        setLoading(false);
        return;
      })
      .catch(error => {
        setError(true);
        return;
      });
  }, [city, isError]);

  useEffect(() => {
    if (!city) {
      return <div>no city found</div>;
    }
    getCityForecast(city)
      .then(forecast => {
        setForecast(forecast);
        setError(false);
        return;
      })
      .catch(error => {
        setError(true);
        return;
      });
  }, [city, isError]);

  const debouncedSearchTerm = useDebounce(value => setCity(value), delay);

  const onInputChange = value => debouncedSearchTerm(value);

  const getSearchWeather = event => {
    event.preventDefault();
    getCityWeather(city);
    getCityWeather(city);
  };
  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          {weather ? (
            <div>
              <Search
                getCityWeather={getSearchWeather}
                changeLocation={onInputChange}
                isError={isError}
              />
              <CityWeather data={weather} />
              <Forecast forecast={weatherforecast} />
            </div>
          ) : (
            <div>error loading weather data</div>
          )}
        </>
      )}
    </div>
  );
};
