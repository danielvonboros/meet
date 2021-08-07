import React from 'react';

import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import {colors, AppBar, Toolbar, Typography} from '@material-ui/core';


export default class NavBar extends React.Component {
    
    render(){
    return(
        
<div>
<AppBar style={{backgroundColor: colors.grey[900]}}>
    <Toolbar>
        <img src="../public/logo_large.png" alt="meet logo" />
        <Typography style={{flexGrow:7}}> </Typography>
        <CitySearch
          locations={this.props.locations}
          updateEvents={this.props.updateEvents}
        />
        <Typography ># of events</Typography>
        <NumberOfEvents
          numberOfEvents={this.props.numberOfEvents}
          handleEventNumberChange={(value) => {
            this.props.handleEventNumberChange(value);
          }}
        />
    </Toolbar>
</AppBar>
</div>
)}
}