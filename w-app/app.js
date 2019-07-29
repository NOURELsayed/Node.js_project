const request = require('request')

const url ='https://api.darksky.net/forecast/03b6e3645b552efb65dbc5fb4ea04adb/37.8267,-122.4233?units=us'

request({url:url,json:true},(error,response)=>{
    // console.log(response)
    // const data = JSON.parse(response.body)
    // console.log(response.body.currently)
    // console.log("It is currently",response.body.currently.temperature)
    // console.log("There is a ",response.body.currently.precipProbability,"chance of rain")
})
const GeacogeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibm9vcmRldmVsb3BlciIsImEiOiJjank3YmFnemIwcDR1M2NxMDlyNTJ1a2J0In0.-dVmb6aQPYDwBCcDn9mdiw'
request({url:GeacogeURL,json:true},(error,response)=>{
    // const lat=response.body.features[0].center[1]
    // const long=response.body.features[0].center[0]
    // console.log(lat,long)
    if (error) {
        console.log('Unable to connect to location services!')
    } 
    // else if (response.body.features.length === 0) {
    //     console.log('Unable to find location. Try another search.')
    // }
     else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})