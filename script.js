class Node {
    constructor(data, next = null) {
      this.data = data
      this.next = next
    }
  }
  
  export default class LinkedList {
    constructor() {
      this.head = null
      this.tail = null
      this.size = 0
    }
  
    append(value) {
      if (this.size === 0) {
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
      } else {
        let newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
      }
      this.size++
    }
  
    prepend(value) {
      if (this.size === 0) {
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
      } else {
        let newNode = new Node(value, this.head)
        this.head = newNode
      }
      this.size++
    }
  
    size() {
      return this.size
    }
  
    head() {
      return this.head
    }
  
    tail() {
      return this.tail
    }
  
    at(index) {
      if (index === 0) {
        return this.head
      }
  
      let count = 0
      let current = this.head.next 
      while (current) {
        count++ // 1
        if (count === index) {
          return current
        }
        current = current.next
      }
      return null
    }
  
    pop() {
      if (this.size === 0) {
        return
      }
  
      if (this.size === 1) {
        this.head = null
        this.tail = null
        return
      }
  
      let newTail = this.at(this.size - 2)
      if (newTail) {
        this.tail = secondToLast
        this.tail.next = null
      }
  
      this.size--
      return
    }
  
    contains(value) {
      if (this.size === 0) {
        return false
      }
  
      let current = this.head 
      while (current) {
        if (current.data === value) {
          return true
        }
        current = current.next
      }
      return false
    }
  
    find(value) {
      let count = 0
      let current = this.head 
      while (current) {
        if (current.data === value) {
          return count
        }
        current = current.next
        count++
      }
      return null
    }
  
    toString() {
      let nodes = []
      let current = this.head 
      while (current) {
        nodes.push(`(${current.data})`)
        current = current.next
      }
      nodes.push("null")
      return nodes.join(" -> ")
    }
  
    insertAt(value, index) {
      
      if (index < 0 || index > this.size) {
        return
      }
  
      if (this.size === 0 || index === this.size) {
        this.append(value)
      } else if (index === 0) {
        this.prepend(value)
      } else {
        const newNode = new Node(value)
        const prevNode = this.at(index - 1)
        newNode.next = prevNode.next
        prevNode.next = newNode
        this.size++
      }
    }
    removeAt(index) {
      if (index < 0 || index >= this.size || this.size === 0) {
        return
      }
  
      if (index === this.size - 1) {
        this.pop()
      } else if (index === 0) {
        this.head = this.head.next
        this.size--
      } else {
        let prevNode = this.at(index - 1)
        prevNode.next = prevNode.next.next
        this.size--
      }
    }
  }