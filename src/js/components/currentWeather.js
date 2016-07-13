import React from 'react';
import moment from 'moment';

import { iconMap, getLocationName } from '../util';
import LoadingIcon from './loadingIcon';


const CurrentWeather = ({ forecast, location }) => {
    return <div>
        <div className='icon'>
            {forecast ? <i className={iconMap(forecast.icon)}></i> : <LoadingIcon />}
        </div>
        <div>
            <div className='location'>
                {location ? getLocationName(location) : <LoadingIcon />}
            </div>
            <div className='date'>
                {moment().format('ll')}
            </div>
        </div>
        <div className='temperature'>
            {forecast ? forecast.temperature + '°' : <LoadingIcon />}
        </div>

    </div>;
};

export default CurrentWeather;
