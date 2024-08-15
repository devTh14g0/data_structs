function Stack(){
  var items=[]

  this.push = function (element){
    items.push(element)
  }
  this.pop=function(){
    return items.pop()
  }
  this.peek = function(){
    return items[items.length - 1]
  }
  this.isEmpty=function(){
    return items.length ===0;
  }
  this.clear = function(){
     items=[]
  }
  this.size = function(){
    return items.length
  }
  this.print=function(){
   console.log(items.toString())
  }
}
var pilha  = new Stack()
pilha.push(1)
pilha.print()
pilha.push(2)
pilha.print()
pilha.push(3)
pilha.print()
pilha.push(4)
pilha.print()
pilha.push(5)
pilha.print()

pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()

function decToBin(decNumber){
  var restStack= [],
  rest,
  binaryString=''

  while(binaryString > 0){
    rest = Math.floor(decNumber%2)
    restStack.push(rest)
    decNumber=Math.floor(decNumber /2)
  }
  while(restStack.length > 0){
    binaryString+= restStack.pop().toString()
  }
  return binaryString
}
console.log(decToBin(23))

