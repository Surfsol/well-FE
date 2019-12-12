import React, { useState, useEffect } from "react";
import AxiosWithAuth from "./AxiosWithAuth";
import Map from "./Map";
import Menu from "./Menu";
import Search from "./Search";
import Filter from './Filter'

//redux
import {connect} from 'react-redux'
import {fetchSensor} from '../redux-actions/sensor-actions' 

import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

const Dashboard = props => {
  // viewport is area being seen on map, used in Search
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 13.004758,
    longitude: 105.784788,
    zoom: 8
  });

  //props in Map and Filter
  const [funcToggle, setFuncToggle] = useState(true);
  //props in Map and Filter
  const [nonFuncToggle, setNonFuncToggle] = useState(true);
  //props in Map and Filter
  const [unknownToggle, setUnknownToggle] = useState(true);
  //props in Search, Dashboard
  const [searchFiltered, setSearchFiltered] = useState([]);
  //props in Map and Search
 // const [sensorInDashboard, setSensorInDashboard] = useState([]);
  const [history, setHistory] = useState([]);

  //https://well-done-staging.herokuapp.com/
  //get senors
//   useEffect(() => {
//     AxiosWithAuth()
//       .get("https://welldone-db.herokuapp.com/api/sensors/recent")
//       .then(res => {
//         console.log(`dashboard`, res.data);
//         setSensorInDashboard(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

useEffect(()=> {
    props.fetchSensor()
}, [])

console.log(props.sensorInDashboard)

  useEffect(() => {
    AxiosWithAuth()
      .get("https://welldone-db.herokuapp.com/api/history")
      .then(res => {
        setHistory(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const zoomInto = () => {
    //default
    if (searchFiltered.length == 0) {
      setViewport({
        latitude: 13.5651,
        longitude: 104.7538,
        width: "100vw",
        height: "100vh",
        zoom: 8
      });
    } else if (searchFiltered.length == 1) {
      const searchPlace = {
        latitude: searchFiltered[0].latitude,
        longitude: searchFiltered[0].longitude,
        width: "100vw",
        height: "100vh",
        zoom: 11
      };
      setViewport(searchFiltered);
    } else if (searchFiltered.length > 1) {
      //searching multiple areas find average of lat and long
      function avgCoordinate(arr) {
        var totalLat = 0;
        var totalLon = 0;
        for (let i = 0; i < arr.length; i++) {
          totalLat += arr[i].latitude;
          totalLon += arr[i].longitude;
        }
        const avgLat = totalLat / arr.length;
        const avgLon = totalLon / arr.length;
        return [avgLat, avgLon];
      }
      //use average coordinates to search
      const searchedPlace = {
        latitude: avgCoordinate(props.searchFiltered)[0],
        longitude: avgCoordinate(props.searchFiltered)[1],
        width: "100vw",
        height: "100vh",
        zoom: 11
      };
      console.log("searchPlace many", searchedPlace);
      setViewport(searchedPlace);
    }
  };
  //call zoomInto when searchFiltered changes
  useEffect(() => {
    zoomInto();
  }, [searchFiltered]);

  return (
    <>
      <div className="dashboard">
        <Menu history={props.history} />
        <Map
          sensors={props.sensorInDashboard}
          funcToggle={funcToggle}
          nonFuncToggle={nonFuncToggle}
          unknownToggle={unknownToggle}
          viewport={viewport}
          setViewport={setViewport}
          history={history}
          selectedPump={props.selectedPump}
          setSelectedPump={props.setSelectedPump}
        />
        <Search
          searchFiltered={searchFiltered}
          setSearchFiltered={setSearchFiltered}
          viewport={viewport}
          setViewport={setViewport}
          sensors={props.sensorInDashboard}
        />
        <Filter
            searchFiltered={props.searchFiltered}
            setSearchFiltered={props.setSearchFiltered}
            sensors = {props.sensorInDashboard}
            setFuncToggle = {setFuncToggle}
            setNonFuncToggle={setNonFuncToggle}
            setUnknownToggle={setUnknownToggle}
        />

      </div>
    </>
  );
};
const mapStateToProps = state => {
    return{
        sensorInDashboard: state.sensorReducer.sensors
    }
}
export default connect(
    mapStateToProps,
    {fetchSensor}
)(Dashboard);
