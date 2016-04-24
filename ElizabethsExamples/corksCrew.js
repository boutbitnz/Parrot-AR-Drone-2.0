// Script which will fly the drone autonomously, without needing user intervention
// Including the library, and creating a client (drone) object
var arDrone = require('ar-drone');
var drone = arDrone.createClient();


drone.ftrim();
drone.takeoff();
drone.calibrate(0);

// drone ascending upward with spiral effect
drone
.after(5000, function() {
  this.clockwise(1);
  this.front(0.02);
  this.up(.2);
})
 .after(5000, function() {
  this.stop(0);
  // Wait for the drone to stop
  true
})

// drone descending down with spiral effects
 .after(6000, function(){
  this.counterClockwise(1);
  this.back(0.05);
  this.down(0.2);
  // Wait for the drone to down
  true
})
 .after(5000, function() {
  this.stop(0);
  // Wait for the drone to stop
  true
})
 .after(5000, function() {
  this.land();
});

/* It is important to remember that JavaScript and Node.js are non-blocking, meaning that if you do not
enclose the instructions in delayed constructs then they will execute and return immediately, meaning that
they will not have sufficient time to execute */

/* Place two cones 5m apart. Write the commands in the REPL to lift-off, fly to an altitude of around 3m,
then fly 5m sideways (keeping the nose pointing away, tail facing towards the pilot), and then descend and land */


