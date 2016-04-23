#Parrot-AR-Drone-2.0
Simple Instructions and Basic Information on setting up workspace and getting Drone started with flight.
Have Fun!
<br />
<br />
<br />
##Work For Starters
Basic INSTRUCTIONS for setting up your workspace. Something to keep in mind before Getting to the developing part of your workflow,
**Collect all the resources and material you could think of that could be useful in pasting together your art piece.**

>**NodeCopter.js:**
<br />
http://www.nodecopter.com/
NodeCopter.js is a full day event where 15 - 60 developers team up in groups of 3. Each team receives one Parrot AR Drone 2.0 and spends the day programming and playing with it. At the end of the day, each team gets to present their work to the other attendees.

>**Basic ar-drone package:**
<br />
https://www.npmjs.com/package/ar-drone
Explains the best way to get started using your drone by creating a repl.js file. This link also provides a short List of the Client API’s.

>**Browser-based npm package to fly your actual, physical drone:**
<br />
https://www.npmjs.com/package/ardrone-webflight

>**Drone simulator:**
<br />
https://www.npmjs.com/package/voxel-drone
This link provide a great demo purely browser-based, like a minecraft world. Helps to get you familiarized with the basic Drone commands available to you in the ar-drone package (first one).
<br />
<br />
<br />

##Setup System and Flying Drone
The **Nodecopter Core Team Provide simple directions** to start flying your Drone flying the Drone
http://www.nodecopter.com/organize#setup-drones
<br />

>**iPhone:**
<br />
If you want to control the copter via your phone, install the AR.FreeFlight from Parrot SA

>**Laptop/PC:**
<br />
Refer to the ‘ Work for Starters ’ section of this doc on help with the following instructions.
install node:
install git:
Install the latest node-ar-drone module:
npm install https://github.com/felixge/node-ar-drone.git
<br />
<br />
<br />


##Drone_Client API / Built-in plugins

**Application Programming Interface**
A set of features and rules allowing interaction between the software providing the API and other software components.is a set of routines, protocols, and tools for building software  applications.

>**arDrone.createClient([options**
Returns a new Client object. options include:
ip: The IP of the drone. Defaults to '192.168.1.1'.
frameRate: The frame rate of the PngEncoder. Defaults to 5.
imageSize: The image size produced by PngEncoder. Defaults tonull.
**client.createREPL()**
Launches an interactive interface with all client methods available in the active scope. Additionally client resolves to the client instance itself.

**client.getPngStream()**
Returns a PngEncoder object that emits individual png image buffers as'data' events. Multiple calls to this method returns the same object. Connection lifecycle (e.g. reconnect on error) is managed by the client.

>**client.getVideoStream()**
Returns a TcpVideoStream object that emits raw tcp packets as 'data'events. Multiple calls to this method returns the same object. Connection lifecycle (e.g. reconnect on error) is managed by the client.

**client.takeoff(callback)**
Sets the internal fly state to true, callback is invoked after the drone reports that it is hovering.

>**client.land(callback)**
Sets the internal fly state to false, callback is invoked after the drone reports it has landed.

**client.up(speed) / client.down(speed)**
Makes the drone gain or reduce altitude. speed can be a value from 0 to 1.

>**client.clockwise(speed) / client.counterClockwise(speed)**
Causes the drone to spin. speed can be a value from 0 to 1.

**client.front(speed) / client.back(speed)**
Controls the pitch, which a horizontal movement using the camera as a reference point. speed can be a value from 0 to 1.

>**client.left(speed) / client.right(speed)**
Controls the roll, which is a horizontal movement using the camera as a reference point. speed can be a value from 0 to 1.

**client.stop()**
Sets all drone movement commands to 0, making it effectively hover in place.

>**client.calibrate(device_num)**
Asks the drone to calibrate a device. Currently the AR.Drone firmware supports only one device that can be calibrated: the magnetometer, which is device number 0.
The magnetometer can only be calibrated while the drone is flying, and the calibration routine causes the drone to yaw in place a full 360 degrees.

**client.config(key, value, callback)**
Sends a config command to the drone. You will need to download the droneSDK to find a full list of commands in theARDrone_Developer_Guide.pdf.

- For example, this command can be used to instruct the drone to send all navdata.

>**client.config('general:navdata_demo', 'FALSE');**
callback is invoked after the drone acknowledges the config request or if a timeout occurs.

- Alternatively, you can pass an options object containing the following:

- key: The config key to set.
value: The config value to set.
timeout: The time, in milliseconds, to wait for an ACK from the drone.
For example:

- var callback = function(err) { if (err) console.log(err); };
client.config({ key: 'general:navdata_demo', value: 'FALSE', timeout: 1000 }, callback);
client.animate(animation, duration)

- Performs a pre-programmed flight sequence for a given duration (in ms).animation can be one of the following
<br />
<br />
<br />

##Built-in plugins
**video-png** streams the video to the browser through static image loading, works great in every browser. Requires ffmpeg installed on your system.

**video-stream** use node-dronestream to stream the raw h264 video feed via webscokets and rendering in Javascript !!! Need a modern browser and CPU.

hud to visualize a head-up display with artificial horizon, compass, altimeter, etc. Based **onnodecopter-cockpit**
pilot to control the drone remotely using the keyboard. Based on drone-browser.
battery display a battery widget in the top bar.
blackbox records all mission data (raw video, navdata, etc.) on the disk.

**replay** replays a mission by injecting the data at the client level. Makes it a very friendly tool to code/test/debug when you can't fly. You need to use video-png for video, not compatible with video-stream yet.
<br />
<br />
<br />

##Resources
 **AR Drone Modification (AR Drone zip tie mod)**
<br />
 http://www.droneflyers.com/2013/02/your-first-ar-drone-modification-should-be-landing-gear/

**A blog on Dancing Parrot Ar.Drone 2.0s**
<br />
http://diydrones.com/profiles/blogs/dancing-parrot-ar-drone-2-0s

**Drone stability guide**
<br />
How to Troubleshoot and Reset your AR Drone (1.0 and 2.0) after a crash
http://www.droneflyers.com/2013/03/how-to-troubleshoot-your-ar-drone-1-0-and-2-0-after-a-crash/




