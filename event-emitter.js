export default class EventEmitter {
    constructor() {
        this.handlerDictionary = {}
    }

    onEvent(type, handler) {
        if (!this.handlerDictionary[type]) {
            this.handlerDictionary[type] = []
        }

        this.handlerDictionary[type].push(handler)
    }

    unleashEvent(event) {
        this.handlerDictionary[event.type].forEach(handler => handler(event))
    }
}