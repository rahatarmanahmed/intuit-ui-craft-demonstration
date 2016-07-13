import React from 'react';
import moment from 'moment';
import _ from 'lodash/fp';

import { iconMap } from '../util';
import LoadingIcon from './loadingIcon';

const DayForecast = ({ forecast }) => {
    return <div className='weekly-forecast-day'>
        <div className='date'>
            {moment(forecast.time * 1000).format('ll')}
        </div>
        <div className='temperature'>
            <span className='hi'>{forecast.temperatureMax}</span>
            <span>/</span>
            <span className='lo'>{forecast.temperatureMin}</span>
        </div>
        <div className='icon'><i className={iconMap(forecast.icon)}></i></div>
    </div>;
};

const tomorrowIndex = _.findIndex((forecast) => {
    return moment(forecast.time*1000).isSame(moment().add(1, 'day'), 'day');
});

const WeeklyForecast = ({ forecasts }) => {
    if(!forecasts) return <LoadingIcon />;


    const week = forecasts.slice(tomorrowIndex(forecasts), 8);

    return <div className='weekly-forecast'>
        {
            week.map((forecast) => <DayForecast forecast={forecast} key={forecast.time}/>)
        }
    </div>;
};

export default WeeklyForecast;
