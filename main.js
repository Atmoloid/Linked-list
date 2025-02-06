import LinkedList from "./linkedList.js"
const list = new LinkedList()

list.prepend("dog")
list.prepend("cat")
list.prepend("parrot")
list.prepend("hamster")
list.prepend("snake")
list.prepend("turtle")

console.log(list.toString())