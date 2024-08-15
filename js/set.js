function set() {
  var items = {}
  this.add = function (value) {
    if (!this.has[value]) {
      items[value] = value;
      return true;
    }
    return false;
  };
  this.delete = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
  };
  this.has = function (value) {
    return items.hasOwnProperty(value);
  };
  this.clear = function () {
    items = [];
  };
  this.size = function () {
    return Object.keys(items).length;
  };
  this.values = function () {
    var values = [],
    keys = Object.keys(items)
    for (var i = 0 ; i < keys.length; i++){
      values.push(items[keys[i]])
    }
    return values
  };

  this.union = function (otherSet){
    var unionSet = new Set(),
    values=this.values()

    for(var i=0 ; i < values.length;  i++){
      unionSet.add(values[i])
    }

    values = otherSet.values()

    for (var  i=0 ; i < values.length ; i++){
      unionSet.add(values[i])
    }
    return unionSet
  }

  this.intersection = function (otherSet){
    var intersectionSet = new Set (),
    values = this.values()

    for(var i=0 ; i < values.length ; i++){
      if(otherSet.has(values[i])){
        intersectionObject.add(values[i])
      }
      return intersectionObject
    }
  }
  this.difference = function (otherSet){
    var differenceSet = new Set (),
    values= this.values()


    for(var i=0 ; i < values.length; i++){
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i])
      }
      return differenceSet
    }
  }

 this.subset = function (otherSet){
  if(this.size() > otherSet.size()){
    return false
  }else{
    var values = this.values()

    for(var i=0 ; i < values.length; i++){
      if(!otherSet.has(values[i])){
        return false
      }
    }
  }
  return true
 }
}
// subset de matrizes
Array.prototype.subsetMatrix= function (otherMatrix){
  if(this.length > otherMatrix.length || this[0].length > otherMatrix[0].length){
    return false;
  }

  function containsAtPosition(matrix,subMatrix,row,col){
    for(let i=0 ; i < subMatrix.length; i++){
      for(let j=0 ; j < subMatrix[0].length;j++){
        if(matrix[row + i][col + j] != subMatrix[i][j]!==subMatrix[i][j]){
          return false
        }
      }
    }
    return true
  }
   for (let i=0 ; i <= otherMatrix.length - this.length; i++){
    for(let j=0 ; j <= otherMatrix[0].length - this[0].length - this[0].length;j++){
      if(containsAtPosition(otherMatrix,this,i,j)){
        return true
      }
    }
   }
   return false;
}



var set = new set()

var setA = new Set()

setA.add(1)
setA.add(2)
setA.add(3)

var setB = new Set ()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

var unionAB= setA.union(setB)
console.log(unionAB.values())


var intersection = setA.intersection (setB)
