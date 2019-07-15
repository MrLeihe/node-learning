const event = require('events')

const eventEmitter = new event.EventEmitter()

class Person extends event.EventEmitter {
    constructor() {
        super()
    }
}

const stone = new Person()
const pig = new Person()

const persons = [stone, pig]
persons.forEach((person) => {
    person.on('speak', (message) => {
        console.log(message)
    })
})

stone.emit('speak', 'i am stone')
pig.emit('speak', 'i am pig')
