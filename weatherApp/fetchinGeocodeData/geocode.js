const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
//first step
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}key=AIzaSyDtnzrRmyjSiAigqlCnyued2qCA2-1XCeE`,
        json: true //this tells it that the info being received is in json form
    }, (error, response, body) => {
        //callback function
        //we can swap body in the stringify for response or error if we want to print
        //that to the console

        //undefined parameter is usually filled to filter out properties
        //2 is the spacing we need to provide when the object is printed to console

        if(error){
            callback('Unable to connect to Google server');
        }else if (body.status === 'ZERO RESULTS') { //specific to the google geocode API
            //when there is a problem in the address then the error term does not get populated
            callback('unable to find the address');
            //problem is in the address entered
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }

        // console.log(JSON.stringify(body, undefined, 2));

        //we know what to type above by moving the cursor on the JSON data in the browser
        //checking the info at the bottom of the webpage
        //results is an array and results is stored in the first component
    });
//above we have made a request to the google api and have got json info back
};

module.exports.geocodeAddress = geocodeAddress;
