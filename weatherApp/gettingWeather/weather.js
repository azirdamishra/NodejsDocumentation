var request = require('request');

var getWeather = (latitude, longitude, callback) => {

    request({
        url:`https://api.darksky.net/forecast/af9b48354fd1dce1aa17a2ff9f46241e/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else{
            console.log('unable to fetch weather');
        }

        //error shows stuff that went wrong on our part that affected the server like a wrong url
        // or not being connected to the internet--> this is a 404 error
        // if we enter invalid location coordinates then the error variable does not get populated
        //instead we get a 400 error

    });

};

module.exports.getWeather = getWeather;

