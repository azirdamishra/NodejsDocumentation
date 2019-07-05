const yargs= require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');
//this is the object that stores the final parsed output
//it takes the input from the process variable, passes it thru yargs and stores the result
const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',   //what the user types in that we are supposed to encode and
            //inject into the url to find location
            describe: 'Address to fetch weather for',
            string: true //this tells yargs that we always should parse the a or address
            //argument as a string as opposed to some other data type
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{

                console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
            }
        });
        //console.log(JSON.stringify(results, undefined, 2));
        //using pretty printing objects
    }
});




