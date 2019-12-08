import React, {useState, useEffect} from 'react'
import AxiosWithAuth from './AxiosWithAuth'
import Map from './Map'

const Dashboard = props => {
    const [viewport, setViewport] = useState({
        width: "100vw",
      height: "100vh",
      latitude: 13.004758,
      longitude: 105.784788,
      zoom: 8
    })

    const [senorInDashboard, setSensorInDashboard]=useState([])


    //get senors 
    useEffect(()=> {
        AxiosWithAuth()
        .get("https://welldone-db.herokuapp.com/api/sensors/recent")
        .then(res => {
            console.log(`dashboard`, res.data)
            setSensorInDashboard(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);
    return(
        <>
        </>
    )


}
export default Dashboard