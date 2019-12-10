import React, {useState, useEffect} from 'react'
import '../assets/css/search.scss'

const Search = props => {
    console.log(props)
    const handleChange = event => {
        if(event.target.value.length !== 0){
            let filtered = props.sensors.filtered(pump => 
                (pump.village_name.toLowerCase().includes(event.target.value.toLowerCase()))
                || (pump.sensor_pid == event.target.value)
                )
                props.setSearchFiltered(filtered)
        }
        else {
            props.setViewport({
                latitude: 13.5651,
                longitude: 104.7538,
                width: "100vw",
                height: "100vh",
                zoom: 8
            })
        }
    }
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search village or sensor physical ID"
                onChange={handleChange}
                />
                <div className="filtered">
                    {props.searchFiltered.map(place => 
                    (<h2>{place.village_name}</h2>))}
                </div>
        </div>
    )
}
export default Search