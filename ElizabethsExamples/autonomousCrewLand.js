#!/usr/bin/env node

// Plug Ins
/*client.on('navdata', console.log);
var pngStream = client.getPngStream();
pngStream.on('data', console.log);*/

// Script which will fly the drone autonomously, without needing user intervention
// Including the library, and creating a client (drone) object
var arDrone = require('ar-drone');
var client  = arDrone.createClient();

// The script then instructs the drone to take-off
client.takeoff();

// Next, the .after function is called on the client
// This delays the following code (contained within an anonymous function) for a certain period of time
// 5 seconds (5000 milliseconds)
client
  .after(5000, function() {
    this.clockwise(0.5);
  })
  // Next instruction (to stop turning, and to land) will occur 3 seconds after the previous instruction
  .after(3000, function() {
    this.stop();
    this.land();
  });


/* It is important to remember that JavaScript and Node.js are non-blocking, meaning that if you do not
enclose the instructions in delayed constructs then they will execute and return immediately, meaning that
they will not have sufficient time to execute */

/* Place two cones 5m apart. Write the commands in the REPL to lift-off, fly to an altitude of around 3m,
then fly 5m sideways (keeping the nose pointing away, tail facing towards the pilot), and then descend and land */