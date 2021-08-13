import React from "react";

import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

import { colors, AppBar, Toolbar, Typography } from "@material-ui/core";

import logo from "./mat/logo_large.png";

export default function NavBar(props) {
  return (
    <div>
      <AppBar className='app-bar' style={{ backgroundColor: colors.grey[900] }}>
        <Toolbar>
          <img className='logo' src={logo} alt='meet logo' />

          <CitySearch
            locations={props.locations}
            updateEvents={props.updateEvents}
            locationChange={props.onLocationChange}
            onCityFound={props.onCityFound}
            onNoCityFound={props.onNoCityFound}
          />
          <Typography># of events</Typography>
          <NumberOfEvents
            numberOfEvents={props.numberOfEvents}
            errorText={props.errorText}
            handleEventNumberChange={(value) => {
              props.handleEventNumberChange(value);
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
