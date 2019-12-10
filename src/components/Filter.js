import React, {useState, useEffect} from 'react'
import AxiosWithAuth from './AxiosWithAuth'



const Filter = props => {
    const[pumps, setPumps] = useState([])
    const[expanded, setExpanded] = useState(false)

    //bring in all pump data
    useEffect(() => {
        AxiosWithAuth()
            .get("https://welldone-db.herokuapp.com/api/pumps")
            .then(res => {
                setPumps(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const isExpanded = () => {
        setExpanded(!expanded)
    }

    return(
        <>
        <div className="filter-expand" onClick={isExpanded}>
            <div>
                Filter
            </div>
            <span></span>
        </div>
        {expanded ? (
            <div className="filter">
                <h4>Village</h4>
                <select className="select-village" onChange={handleChange}>
                    {pumps.map(pump =>
                    (<option value={pump.village_name} key={pump.sensor_pid}>
                            {pump.village_name}
                            </option>)
                    )}
                </select>
            </div>
        ) : null}
        </>
    )
    
}