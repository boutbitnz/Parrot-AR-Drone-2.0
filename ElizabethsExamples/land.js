
// Script which will fly the drone autonomously, without needing user intervention
// Including the library, and creating a client (drone) object
var arDrone = require('ar-drone');
var drone = arDrone.createClient();

// The script then instructs the drone to land
drone.land();

/* It is important to remember that JavaScript and Node.js are non-blocking, meaning that if you do not
enclose the instructions in delayed constructs then they will execute and return immediately, meaning that
they will not have sufficient time to execute */

/* Place two cones 5m apart. Write the commands in the REPL to lift-off, fly to an altitude of around 3m,
then fly 5m sideways (keeping the nose pointing away, tail facing towards the pilot), and then descend and land */