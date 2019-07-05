var request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBYLRhvqggxg9hXpn0I5DzsFCf3AqNfadc`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to Google server');
            }else if (body.status === 'ZERO RESULTS') {
                reject('unable to find the address');
            }else if(body.status === 'OK'){
                resolve( {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }

        });

    });

};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined,2));
}, (errorMessage) => {
    console.log(errorMessage);
});
