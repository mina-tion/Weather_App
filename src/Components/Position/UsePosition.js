import React from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherInfo } from '../../store/async actions/getWeatherInfo';
import { useEffect } from 'react';

export const UsePosition = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    
        dispatch(getWeatherInfo({latitude: position.coords.latitude, longitude: position.coords.longitude}))
          });
    }, [])

  return (
      <div>

      </div>
  );
};