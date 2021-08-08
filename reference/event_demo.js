const EventEmitter = require('events');

class Myemitter extends EventEmitter {};


const myemmitter = new Myemitter();

myemmitter.on("event", () => console.log("Event fired"));

myemmitter.emit('event');
myemmitter.emit('event');
myemmitter.emit('event');
myemmitter.emit('event');
myemmitter.emit('event');

