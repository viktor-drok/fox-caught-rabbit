import Animal from './animal.js'

console.log(Animal.prototype)
const rabbit = new Animal('rabbit')
const fox = new Animal('fox')

// rabbit.jump()
// fox.catch(rabbit)

rabbit.onEvent('jump', event => fox.catch(event.target))
rabbit.onEvent('jump', event => console.log('audience sees', event.target.specie))

setTimeout(() => {
    rabbit.jump()
}, 2000)

window.rabbit = rabbit

