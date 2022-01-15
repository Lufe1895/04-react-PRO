import axios from 'axios';

const directionsAPI = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibHVmZTE4OTUiLCJhIjoiY2t5ZzExYjhiMTRoaDJ3bGt6M3Z2YWJjdSJ9.H29pJspW06VRxqfJSbNXHg'
    }
})

export default directionsAPI;