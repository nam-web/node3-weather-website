const request = require('postman-request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2a1b27845191174a03d499b7bc19d1bc&query=' + latitude + ',' + longitude + '&units=f'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to network!',undefined)
        }else if(body.error){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0] + '. The current temperature is '+ body.current.temperature +'. It feels like '+ body.current.feelslike + '. The humidity is '+ body.current.humidity + ' percent.')
        }
    })
}

module.exports = forecast