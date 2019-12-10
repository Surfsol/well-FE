import React, { useState, useEffect } from "react";
import AxiosWithAuth from "./AxiosWithAuth";

import Popup from "reactjs-popup";
import { FiWifi } from "react-icons/fi";
import FuncToggle from "./Toggle/FuncToggle";
import UnknownToggle from './Toggle/UnknownToggle'
import NonFuncToggle from "./Toggle/NonFuncToggle";

const Filter = props => {
  const [pumps, setPumps] = useState([]);
  const [expanded, setExpanded] = useState(false);

  //bring in all pump data
  useEffect(() => {
    AxiosWithAuth()
      .get("https://welldone-db.herokuapp.com/api/pumps")
      .then(res => {
        setPumps(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleChange = event => {
      if(event.target.value.length !==0){
          let filtered = pumps.filter(pump => 
            pump.village_name.toLowerCase().includes(event.target.value.toLowerCase()))
            props.setSearchFiltered(filtered)
      }
  }

  const isExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="filter-expand" onClick={isExpanded}>
        <div>Filter</div>
        <span></span>
      </div>
      {expanded ? (
        <div className="filter">
          <h4>Village</h4>
          <select className="select-village" onChange={handleChange}>
            {pumps.map(pump => (
              <option value={pump.village_name} key={pump.sensor_pid}>
                {pump.village_name}
              </option>
            ))}
          </select>

          <Popup
            modal
            trigger={
              <h4>
                Status <FiWifi />
              </h4>
            }
          >
            {close => <Content close={close} />}
          </Popup>

          <div className="pump-type">
            <p>Functional</p>
            <FuncToggle
              sensors={props.sensors}
              setFuncToggle={props.setFuncToggle}
            />
          </div>
          <div class="pump-type">
            <p>Unknown</p>
            <UnknownToggle
              sensors={props.sensors}
              setUnknownToggle={props.setUnknownToggle}
            />
          </div>
          <div class="pump-type">
            <p>Non-Functional</p>
            <NonFuncToggle
              sensors={props.sensors}
              setNonFuncToggle={props.setNonFuncToggle}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
