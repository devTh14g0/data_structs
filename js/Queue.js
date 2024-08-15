 function Queue() {
  items = [];
  this.enqueue = function (element) {
    items.push(element);
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.size = function () {
    return items.length;
  };
  this.print = function () {
    console.log(items.toString());
  };
}
var fila = new Queue();

 function prirorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);
    var added = false;

    for (var i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
  if (!added) {
    items.push(queueElement);
  }

  this.dequeue = function () {
    return items.shift();
  };

  this.print = function () {
    for (var i = 0; i < items.length; i++) {
      console.log(items[i].element + " " + item[i].priority);
    }
  };
}
}
var pqueue = new prirorityQueue();

pqueue.enqueue("thiago", 1);
pqueue.enqueue("elma", 1);
pqueue.enqueue("betoven", 2);
pqueue.enqueue("pandora", 1);
pqueue.enqueue("perola", 2);
pqueue.print();

function hotPotato(nameList, num) {
  var queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = "";

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue);
    }
    eliminated = queue.dequeue();
    console.log(eliminated + "was eliminated for hot potato game");
  }
  return queue.dequeue();
}

var names = ["joao", "jose", "maria", "pedro", "ana"];
var winner = hotPotato(names, 7);
console.log("the winner is" + winner);

function prirorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);
    var added = false;

    for (var i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      items.push(queueElement);
    }
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.print = function () {
    for (var i = 0; i < items.length; i++) {
      console.log(items[i].element + "" + items[i].priority);
    }
  };
}
