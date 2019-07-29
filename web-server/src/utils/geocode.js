const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoibm9vcmRldmVsb3BlciIsImEiOiJjanloY2c0c2owNzZmM2hwbDhpZGc4YnJ6In0.D1vsO_bhCTS4kks3uJ9LVw'

    request({ url, json: true }, (error, response) => {
        //console.log(response.body);
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[1],
                latitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode