
function linkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    var node = new Node(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      var current = head;
      previous, (index = 0);

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };

  this.indexOf = function (element) {
    var current = head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(this.indexOf);
  };

  this.getHead = function () {
    return head;
  };
  this.size = function () {
    return length;
  };
  this.isEmpty = function () {
    return length === 0;
  };
}

function Dick (){
  var items = {}

  this.set = function (key,value){
    items[key]=value;
  }
  this.delete = function (key){
  if(this.has(key)){
    delete items[key]
    return true
  }
  return false
  }
  this.has= function (key){
    return items.hasOwnProperty(key)
  }
  this.get= function (key){
      return this.has(key) ? items[key]:undefined
   }
  this.clear = function (){
   items={}
  }
  this.size= function (){
  return Object.keys(items).length
  }
  this.keys= function (){
 return Object.keys(items)
  }
  this.values= function (){
   var values = []
   keys = Object.keys(items)

   for(var i=0 ; i < this.keys.length; i++){
    values.push(items[keys[i]])
   }
   return values
  }

  this.getItems= function (){
    return items
  } 
}

var dic= new Dick()
dic.set("Gandalf",'gandalf@gmail.com')
dic.set('thiago','thiago@gmail.com')
dic.set('betoven','betoven@gmail.com')
console.log(dic.has('thiago'))
console.log(dic.has("perola"))
console.log(dic.get('thiago'))
console.log(dic.getItems())


function HashTable () {
  var table = []
  
  var ValuePair = function (key,value){
    this.key = key
    this.value = value
    this.ToString =  function (){
      return '[' + this.key +' - ' + this.value + ']' 
    }

    this.put = function (key,value){
     var position = loseloseHashCode(key)

     if(table[position]===undefined){
      table[position] = new linkedList()

      table[position].append(new ValuePair(key,value))
     }
    }

    this.remove = function (key){
      var position  = loseloseHashCode(key)

      if(table[position]!==undefined){
        var current= table[position].getHead()

        while(current.next){
          if(current.element.key === key){
            table[position].remove(current.element)
            if(table[position]=== undefined){

            }
            return true
          }
          current = current.next
        }
        if(current.element.key===key){
          table[position].remove(current.element)
          if(table[position].isEmpty){
            table[position]=== undefined
          }
          return true
        }
        current = current.next
      }
      if(current.element.key === key){
        table[position].remove(current.element)
        if(table[position].isEmpty()){
          table[position] = undefined
        }
        return true
      }else{
        return false
      }
    }
    this.get = function (key){
      var position = loseHashCode(key)

      if(table[position]!== undefined){
        var current = table[position].getHead()

        while(current.next){
          if(current.element.key === key){
            return current.element.value
          }
          current = current.next
        }
        if(current.element.key === key){
          return current.element.value
        }
      }
      return undefined
    }

    var loseHashCode = function (key) {
      var hash = 0;
      for(var i = 0 ; i < key.length ; i++){
        hash += key.charCodeAt(i)
      }
      return hash % 37
    }
    this.print = function ()
{
  for(var i=0 ; i < table.length ; i++){
    if(table[i]===undefined){
      console.log(i + ' : ' + table[innerWidth])
    }
  }
}  }

this.size = function () {
  return table.length
}
}

