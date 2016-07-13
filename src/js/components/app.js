import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash/fp';

import CurrentWeather from './currentWeather';
import WeeklyForecast from './weeklyForecast';
import { changeLocation } from '../actions';

const App = ({ forecast, location }) => {
    return <div className='row center-xs around-sm middle-sm'>
        <CurrentWeather forecast={_.get('currently', forecast)} location={location} />
        <WeeklyForecast forecasts={_.get('daily.data', forecast)} />
    </div>;
};

// Things to pass to App with connect
const mapStateToProps = ({ forecast, location }) => {
    return { forecast: forecast.data, location: location.data };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLocation: _.pipe(changeLocation, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
