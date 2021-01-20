import './dom'

console.log('index file')

const greet = (name) => {
  console.log(`hello ${name}`)
}

greet('mario')
greet('luigi')
greet('yoshi')

class User {
  constructor(){
    this.score = 0;
  }
}