import React, {useEffect} from 'react';
import ReactMapGl,  {Popup}  from 'react-map-gl';
import Pin from './Pin'

import PopupInfo from './PopupInfo'
//import Pin

const TOKEN = process.env.REACT_APP_TOKEN

// class Map extends Component {

//   state = {
//     viewport: {
//       width: 800,
//       height: 800,
//       latitude: 37.7577,
//       longitude: -122.4376,
//       zoom: 8
//     }
//   };

//   render() {
//     return (
//       <ReactMapGL mapboxApiAccessToken={TOKEN}
//         {...this.state.viewport}
//         onViewportChange={(viewport) => this.setState({viewport})}
//       />
//     );
//   }
// }

// export default Map

export default function Map(props){
  console.log('props in Map', props) 

useEffect(() => {
  const listener = e => {
    console.log("here", e);
    if (e.key === "Escape") {
      props.setSelectedPump(null);
    }
  };
  console.log("listener", listener);
  window.addEventListener("keydown", listener);

  return () => {
    window.removeEventListener("keydown", listener);
  };
}, []);

return (
  <div>
    <ReactMapGl
      mapboxApiAccessToken={
        "pk.eyJ1IjoiaHRyYW4yIiwiYSI6ImNrMmdmeWM2dDB1amkzY3AwNWgwNHRteXUifQ.jG0OQ6bMhr-sZYMkdj3H6w"
      }
      mapStyle="mapbox://styles/htran2/ck2gg912i09dt1cnhtuu1ar2u"
      onViewportChange={viewport => {
        props.setViewport(viewport);
      }}
      {...props.viewport}
    >
      <Pin
        sensors={props.sensors}
        setSelectedPump={props.setSelectedPump}
        funcToggle={props.funcToggle}
        nonFuncToggle={props.nonFuncToggle}
        unknownToggle={props.unknownToggle}
        // history={history}
        pumps={props.pumps}
      />

          {props.selectedPump ? (
              <Popup
              className = "popupCard"
              latitude={props.selectedPump.latitude}
              longitude={props.selectedPump.longitude}
              onClose={() => {
                  props.setSelectedPump(null)
              }}
              closeOnClick={false}
              >
                  <PopupInfo 
                      // sensors={sensorInMap} 
                      sensors={props.sensors} 
                      selectedPump={props.selectedPump}
                      history={props.history}
                  />
              </Popup>
          ) : null}

    </ReactMapGl>
  </div>
);
}
