import axios from "axios"

const ServiceGet = () => {
    return axios.get('https://coetus.herokuapp.com/api/message')
}
const ServicePut = (nadimak, poruka) => {
    return axios.put('https://coetus.herokuapp.com/api/message', { username: nadimak, message: poruka })
}
const userMsgs = (nadimak) => {
    return axios.post('https://coetus.herokuapp.com/api/message', { username: nadimak })
}

export { ServiceGet, ServicePut, userMsgs }