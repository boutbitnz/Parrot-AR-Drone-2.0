#!/usr/bin/env node

// Plug Ins
/*client.on('navdata', console.log);
var pngStream = client.getPngStream();
pngStream.on('data', console.log);*/

// Script which will fly the drone autonomously, without needing user intervention
// Including the library, and creating a client (drone) object
var arDrone = require('ar-drone');
var client = arDrone.createClient();

// The script then instructs the drone to take-off
client.ftrim();
client.takeoff(0);
client.calibrate(0);

client
.after(5000, function() {
  this.up(0.5);
  this.clockwise(0.2);
  // this.front(0.02);
  this.left(0.5);
})
 .after(15000, function() {
  this.stop(0);
})
 .after(8000, function(){
  this.land();
});


// drone.takeoff();

// drone
//   .after(5000, clockwise1)
//   .after(3000, function() {
//     this.animate('flipLeft', 15);
//   })
//   .after(1000, function() {
//     this.stop();
//     this.land();
//   });

//   function clockwiseKris() {
//     this.clockwise(0.5);
//     // this.?  more?
//   }

//   function flip() {
//     this.animate('flipLeft', 15);
//   }