import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = () =>
{
    const classes = useStyles();
    const isMobile = useMediaQuery('(mid-width:600px)');
     
    const coordinates = { lat: 22, lng: 75 };


    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
             bootstrapURLKeys={{ key: 'AIzaSyAygUqFD6JULy7LSeB-1AnH-ZqhzKVi2cU' }}
             defaultCenter={coordinates}
             center={coordinates}
             defaultZoom={14}
             margin={[50, 50, 50]}
             options={''}
             onChange={''}
             onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}
export default Map;