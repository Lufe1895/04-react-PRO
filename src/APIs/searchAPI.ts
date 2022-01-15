import axios from 'axios';

const searchAPI = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibHVmZTE4OTUiLCJhIjoiY2t5ZzExYjhiMTRoaDJ3bGt6M3Z2YWJjdSJ9.H29pJspW06VRxqfJSbNXHg'
    }
})

export default searchAPI;