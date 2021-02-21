const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/e422ee710571c4b4e7b8774fc1e56920/' + lat + ',' + lon
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather services')
        } else if(body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary +
                ' It is currently ' +
                 body.currently.temperature +
                ' degrees out. There is a ' +
                body.currently.precipProbability + 
                '% chance of rain.'
            )
                
        }
    })
}

module.exports = forecast