import salutation from 'salutation'

const places = [
  'world',
  'galaxy',
  'universe',
]

const greetings = places
  .map(place => `${salutation} ${place}`)
  .join(', ')

console.log(greetings)
// hello world, hello galaxy, hello universe
