// Script which will fly the drone autonomously, without needing user intervention
// Including the library, and creating a client (drone) object
var arDrone = require('ar-drone');
var drone = arDrone.createClient();

// The script then instructs the drone to take-off
drone.ftrim();
drone.takeoff(0);
drone.calibrate(0);

drone
.after(8000, function() {
  this.clockwise(1);
  this.front(0.05);
  this.up(0.1);
})
 .after(5000, function() {
  this.stop(0);
})
 .after(5000, function(){
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