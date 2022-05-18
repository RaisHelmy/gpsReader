const GPS = require('gps-nmea-reader');

const gps = new GPS('COM20',9600);

gps.on('data',(data)=>{
    console.log(data)
})