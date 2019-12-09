import axios from "axios"

const AxiosWithAuth = () =>{
    return axios.create({
        headers:{
            "Content-Type":"application/json"
        }
    })
}
export default AxiosWithAuth