import React from 'react';
import { DailyForecast } from './DailyForecast';
import getIcon from '../utils/setIcon';

export const Forecast = ({ forecast }) => {
  return <DailyForecast geticon={getIcon} forecast={forecast} />;
};
