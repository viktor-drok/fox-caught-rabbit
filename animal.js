import EventEmitter from './event-emitter.js'


export default class Animal extends EventEmitter {
    constructor(specie) {
        super()

        this.specie = specie
    }

    catch(obj) {
        setTimeout(() => {
            console.log(this.specie, 'caught', obj.specie)
        }, 3000)
    }

    jump() {
        const event = { type: 'jump', target: this }

        this.unleashEvent(event)

        console.log(this.specie, 'is jumping...')
    }

}