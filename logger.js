const EventEmitter = require('events');
const uuuid = require('uuid');

class MyeventEmmiter extends EventEmitter{
    log(msg){
        console.log(this.emit('message', {uuid:uuuid.v4(), msg:msg}))
    };


    myfunc(mssg){
        console.log(this.emit('www', mssg));
    }

};


// module.exports = MyeventEmmiter;
const Logger = require('./logger');


const logger = new Logger();

logger.on("www", data => console.log(`Called logger with data:`,data));

logger.myfunc("hello world");