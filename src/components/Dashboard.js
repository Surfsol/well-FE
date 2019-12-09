import React, { useState, useEffect } from "react";
import AxiosWithAuth from "./AxiosWithAuth";
import Map from "./Map";

const Dashboard = props => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 13.004758,
    longitude: 105.784788,
    zoom: 8
  });

  const [serchFiltered, setSearchFiltered] = useState([]);
  const [senorInDashboard, setSensorInDashboard] = useState([]);
  const [history, setHistory] = useState([]);

  //get senors
  useEffect(() => {
    AxiosWithAuth()
      .get("https://welldone-db.herokuapp.com/api/sensors/recent")
      .then(res => {
        console.log(`dashboard`, res.data);
        setSensorInDashboard(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
    }
    else if(searchFiltered.length > 1) {
        function avgCoordinate(arr){
            var totalLat = 0
        }
    }
  };

  return <></>;
};
export default Dashboard;
