
function DoublyLinkedList() {
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
    
    if(position >= 0 && position <=length){
      var node = new Node(element),
      current= head,
      previous,
      index =0


      if (position === 0 ) {
        if(!head) {
          head = node
          tail = node

        }else{
          node.next= current
          current.priv=node
          head = node
        }
      }else if (position === length) {
        current = tail
        current.next = node
        node.priv = current
        tail =node
      }else{
        while(index ++ < position ){
          previous = current
          current = current.next
        }
        node.next=current
        previous.next = node
        current.prev= node
        node.prev = previous
      }
      length ++
      return true
    }else{
      return false
    }
  }

  this.removeAt = function () {
    if(position > - 1 && position < length){
      var current = head,
      previous,
      index=0

      if(position===0){
        head = current.next

        if(length ===1){
          tail = null
        }else{
          head.prev = null
        }
      }else if(position ===length){
        current = tail
        tail = current.prev
        tail.next = null
      }else{
        while(index ++ < position){
          previous=current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous
      }
      length --
      return current.element
    }else{
      return null
    }
  }
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

  }

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
