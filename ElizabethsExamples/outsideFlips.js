#!/usr/bin/env node

// Plug Ins
/*client.on('navdata', console.log);
var pngStream = client.getPngStream();
pngStream.on('data', console.log);*/

// Script which will fly the drone autonomously, without needing user intervention
// Including the library, and creating a client (drone) object
var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
  .after(2000, function() {
    this.up(1);
  })
  .after(2000, function() {
    this.animate('flipAhead',500);
  })
  .after(1000, function() {
    this.animate('flipBehind', 500);
  })
  .after(1000, function() {
    this.animate('flipLeft',500);
  })
  .after(1000, function() {
    this.animate('flipRight', 500);
  })
  .after(5000, function() {
    this.front(1.0);
  })
  .after(2000, function() {
    this.clockwise(0.5);
  })
  .after(5000, function() {
    this.back(0.8);
  })
  .after(2000, function() {
    this.land();
  });

/* It is important to remember that JavaScript and Node.js are non-blocking, meaning that if you do not
enclose the instructions in delayed constructs then they will execute and return immediately, meaning that
they will not have sufficient time to execute */

/* Place two cones 5m apart. Write the commands in the REPL to lift-off, fly to an altitude of around 3m,
then fly 5m sideways (keeping the nose pointing away, tail facing towards the pilot), and then descend and l